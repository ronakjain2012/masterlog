<template>
  <v-container class="mt-12 pa-0">
    <div class="d-flex justify-center">
      <v-card
        class="my-auto text-left"
        :max-width="infoSettings.max_width"
        :min-width="infoSettings.min_width"
        :color="infoSettings.background_color"
        :style="{ background: `url(${infoSettings.background_img})` }"
        :shaped="infoSettings.shaped"
        :elevation="infoSettings.elevation"
        :flat="infoSettings.flat"
      >
        <v-list-item class="mt-4 mr-8 text-left">
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
        <v-list-item class="mt-4 mr-7">
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
        <v-container fluid>
          <v-row no-gutters>
            <v-col
              class="ma-5"
              v-for="(item, i) of infoSettings.sections"
              :key="i"
            >
              <p
                class="subtitle-2"
                v-if="item.heading"
                :style="{ color: item.heading_color }"
              >
                {{ item.heading }}
              </p>
              <v-list-item v-for="(it, k) in item.items" :key="k + 'item'">
                <v-list-item-content class="subtitle-1">
                  <v-list-item-title
                    :style="{ color: it.heading_color }"
                    class="text-decoration-none"
                    v-if="!it.link"
                    >{{ it.heading }}</v-list-item-title
                  >
                  <router-link
                    v-else-if="it.link && it.link_type == 'internal'"
                    class="text-decoration-none"
                    :to="it.url"
                    ><v-list-item-title :style="{ color: it.heading_color }">{{
                      it.heading
                    }}</v-list-item-title>
                  </router-link>
                  <a v-else :href="it.url" class="text-decoration-none"
                    ><v-list-item-title :style="{ color: it.heading_color }">{{
                      it.heading
                    }}</v-list-item-title></a
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="3">
              <v-row v-if="infoContact.name1"
                ><v-col>
                  <span :style="{ color: infoContact.name1_color }">
                    {{ infoContact.name1 }}
                  </span>
                </v-col></v-row
              >
              <v-row v-if="infoContact.name2"
                ><v-col>
                  <span :style="{ color: infoContact.name2_color }">
                    {{ infoContact.name2 }}
                  </span>
                </v-col></v-row
              >
              <v-row v-if="infoContact.name3"
                ><v-col>
                  <span :style="{ color: infoContact.name3_color }">
                    {{ infoContact.name3 }}
                  </span>
                </v-col></v-row
              >
              <v-row v-if="infoContact.name4"
                ><v-col>
                  <span :style="{ color: infoContact.name4_color }">
                    {{ infoContact.name4 }}
                  </span>
                </v-col></v-row
              >
            </v-col>
          </v-row>
        </v-container>
        <v-footer dark padless>
          <v-card
            width="100vw"
            flat
            tile
            class="text-center"
            :color="infoContact.footer_color"
            :style="{ color: infoContact.footer_text_color }"
          >
            <v-card-text>
              <v-btn
                v-for="icon in infoContact.links"
                :key="icon.icon + 'x'"
                class="mx-4"
                :to="icon.url"
                :color="icon.background_color"
                fab
                elevation="0"
              >
                <v-icon size="24px" :color="icon.icon_color">
                  {{ icon.icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text
              class="pt-0"
              v-if="infoContact.footer_desc"
              :style="{ color: infoContact.footer_text_color }"
            >
              {{ infoContact.footer_desc }}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text :style="{ color: infoContact.footer_text_color }">
              {{ new Date().getFullYear() }} —
              <strong> &copy; TimeSource Group by @ronakjain2012</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import CButton from "../../components/CButton.vue";

export default {
  name: "Footer1",
  components: { CButton },
  data: () => ({
    model: 0,
  }),
  props: ["section", "settings"],
  computed: {
    ...mapGetters(["getData", "dataLoaded"]),
    infoSettings: function () {
      return this.getData[this.section].settings;
    },
    infoContact: function () {
      return this.getData[this.section].settings.contact;
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