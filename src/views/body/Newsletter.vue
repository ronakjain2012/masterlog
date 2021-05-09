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
        <v-row>
          <v-col cols="12" md="6">
            <v-row
              class="align-center justify-center fill-height pa-3"
              no-gutters
            >
              <v-col cols="12" md="8">
                <v-text-field
                  :label="infoSettings.form_placeholder"
                  solo
                  v-model="form.contact"
                  :placeholder="infoSettings.form_placeholder"
                  hide-details="auto"
                  :readonly="readonly"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" class="pa-3">
                <v-btn
                  :color="infoSettings.btn_color"
                  block
                  large
                  @click="submit()"
                  :loading="readonly"
                >
                  <span :style="{ color: infoSettings.btn_text_color }"
                    >Submit</span
                  >
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-list-item class="text-center justify-center">
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
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Newsletter",
  data: () => ({
    form: {
      contact: null,
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
            subject: that.infoSettings.form.subject,
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
      if (!this.form.contact) {
        error.push(
          "Please enter Email or Phone Number to subscribe our Newsletter"
        );
      }
      if (error.length) {
        this.$store.dispatch("addSnack", {
          text: error.join(", "),
          forTime: 7000,
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