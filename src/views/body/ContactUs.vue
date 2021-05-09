<template>
  <v-container class="py-16">
    <div class="d-flex justify-center">
      <v-card
        class="py-16 my-auto text-center"
        :max-width="infoSettings.max_width"
        :min-width="infoSettings.min_width"
        :color="infoSettings.background_color"
        :style="{ background: `url(${infoSettings.background_img})` }"
        :shaped="infoSettings.shaped"
        :elevation="infoSettings.elevation"
        :flat="infoSettings.flat"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-list-item class="text-center justify-center pa-2">
                <v-list-item-avatar :size="infoSettings.ii_size">
                  <v-icon
                    v-if="infoSettings.icon"
                    :size="infoSettings.ii_size"
                    :color="infoSettings.icon_color"
                    >{{ infoSettings.icon }}</v-icon
                  >
                  <v-img
                    v-if="infoSettings.image"
                    :lazy-src="infoSettings.image_thumb || infoSettings.image"
                    :src="infoSettings.image"
                  ></v-img>
                </v-list-item-avatar>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    v-if="infoSettings.heading"
                    class="display-3 font-weight-medium"
                    :style="{ color: infoSettings.heading_color }"
                    >{{ infoSettings.heading }}</v-list-item-title
                  >
                  <div
                    class="display-1"
                    v-if="infoSettings.desc1"
                    :style="{ color: infoSettings.desc1_color }"
                  >
                    {{ infoSettings.desc1 }}
                  </div>
                  <p
                    v-if="infoSettings.desc2"
                    :style="{ color: infoSettings.desc2_color }"
                  >
                    {{ infoSettings.desc2 }}
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="6">
              <v-row justify="center">
                <v-col cols="12" md="11">
                  <v-text-field
                    ref="name"
                    v-model="form.name"
                    label="Full Name"
                    placeholder="John Doe"
                    :readonly="readonly"
                    solo
                  ></v-text-field>
                  <v-text-field
                    ref="contact"
                    v-model="form.contact"
                    label="Email/Phone Number"
                    placeholder="example@example.com/+91 9999999999"
                    :readonly="readonly"
                    solo
                  ></v-text-field>
                  <v-text-field
                    ref="state"
                    v-model="form.state"
                    label="City/State/Province/Region"
                    placeholder="Jaipur/Rajasthan"
                    solo
                    :readonly="readonly"
                  ></v-text-field>
                  <v-text-field
                    ref="zip"
                    v-model="form.zip"
                    label="ZIP / Postal Code"
                    placeholder="79938"
                    solo
                    :readonly="readonly"
                  ></v-text-field>
                  <v-autocomplete
                    ref="country"
                    v-model="form.country"
                    :items="countries"
                    label="Country"
                    placeholder="Select Country..."
                    required
                    solo
                    :readonly="readonly"
                  ></v-autocomplete>
                  <v-autocomplete
                    ref="country"
                    v-model="form.reason"
                    :items="reason"
                    label="For"
                    placeholder="Select Reason..."
                    required
                    solo
                    :readonly="readonly"
                  ></v-autocomplete>
                  <v-textarea
                    v-model="form.details"
                    label="Message"
                    full-width
                    single-line
                    solo
                    :readonly="readonly"
                  ></v-textarea>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      :color="infoSettings.btn_color"
                      large
                      @click="submit()"
                      :loading="readonly"
                    >
                      <span :style="{ color: infoSettings.btn_text_color }"
                        >Submit</span
                      >
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "ContactUs",
  data: () => ({
    model: 0,
    countries: [
      "India",
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antigua &amp; Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia &amp; Herzegovina",
      "Botswana",
      "Brazil",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Cape Verde",
      "Cayman Islands",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Congo",
      "Cook Islands",
      "Costa Rica",
      "Cote D Ivoire",
      "Croatia",
      "Cruise Ship",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Polynesia",
      "French West Indies",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kuwait",
      "Kyrgyz Republic",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macau",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Nepal",
      "Netherlands",
      "Netherlands Antilles",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Pierre &amp; Miquelon",
      "Samoa",
      "San Marino",
      "Satellite",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "South Africa",
      "South Korea",
      "Spain",
      "Sri Lanka",
      "St Kitts &amp; Nevis",
      "St Lucia",
      "St Vincent",
      "St. Lucia",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      `Timor L'Este`,
      "Togo",
      "Tonga",
      "Trinidad &amp; Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks &amp; Caicos",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Venezuela",
      "Vietnam",
      "Virgin Islands (US)",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ],
    reason: [
      "Sales",
      "Enquiry",
      "Complaint",
      "Raw Purchase",
      "Service",
      "Others",
    ],
    form: {
      name: null,
      contact: null,
      state: null,
      zip: null,
      country: null,
      reason: null,
      details: null,
    },
    readonly: false,
  }),
  props: ["section", "settings"],
  computed: {
    ...mapGetters(["getData", "dataLoaded"]),
    infoSettings: function () {
      return this.getData[this.section].settings;
    },
  },
  methods: {
    submit: function () {
      this.readonly = true;
      let that = this;
      if (!this.errors()) {
        axios
          .post(that.infoSettings.form.url, {
            ...that.form,
            for: that.infoSettings.form.for,
            subject: that.infoSettings.form.subject + " - " +that.form.name ,
          }).then(function (){
            that.clearForm();
          })
          .catch(function (err) {
            console.log(err);
          })
          .finally(function () {
            that.readonly = false;
          });
      }
    },
    clearForm: function () {
      for(var x in this.form) {
        this.form[x] = null
      }
    },
    errors() {
      var error = [];
      if (!this.form.name) {
        error.push(
          "Please Enter Name Sir/Ma'am"
        );
      }
      if (!this.form.contact) {
        error.push(
          "Please Enter Email/Phone Number"
        );
      }
      if (!this.form.country) {
        error.push(
          "Please Select Country"
        );
      }
      if (!this.form.reason) {
        error.push(
          "Please Select For Option (Reason)"
        );
      }
      
      if (error.length) {
        this.$store.dispatch("addSnack", {
          text: error.join(", "),
          forTime: 10000,
          stype: "danger",
        });
        this.readonly = false;
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-card {
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}
</style>