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
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import CButton from "../../components/CButton.vue";

export default {
  name: "MiniInfoSection",
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