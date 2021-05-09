<template>
  <v-container class="py-16">
    <v-card class="py-16 my-auto text-center" flat>
      <h1
        class="text-uppercase font-weight-bold display-2 font-weight-black mb-4"
      >
        {{ infoSettings.heading }}
      </h1>
      <h1 class="headline font-weight-bold mb-4">
        {{ infoSettings.desc1 }}
      </h1>
      <p class="mb-10">
        {{ infoSettings.desc2 }}
      </p>
      <v-card-text>
        <div class="d-flex justify-space-around flex-wrap mb-6">
          <v-card
            v-for="(item, i) of infoItems"
            :key="'info' + i"
            :max-width="infoSettings.max_width"
            :min-width="infoSettings.min_width"
            :color="item.background_color"
            :style="{ background: `url(${item.background_img})` }"
            :shaped="infoSettings.shaped"
            :elevation="infoSettings.elevation"
            :flat="infoSettings.flat"
            class="mt-5"
          >
            <v-list-item class="text-center justify-center ">
              <v-list-item-avatar :size="item.ii_size">
                <v-icon v-if="item.icon" :size="item.ii_size" :color="item.icon_color">{{
                  item.icon
                }}</v-icon>
                <v-img
                  v-if="item.image"
                  :lazy-src="item.image_thumb || item.image"
                  width="50"
                  :src="item.image"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  v-if="item.heading"
                  class="headline mb-1"
                  :style="{ color: item.heading_color }"
                  >{{ item.heading }}</v-list-item-title
                >
                <div
                  class="subtitle-1"
                  v-if="item.desc1"
                  :style="{ color: item.desc1_color }"
                >
                  {{ item.desc1 }}
                </div>
                <p v-if="item.desc2" :style="{ color: item.desc2_color }">
                  {{ item.desc2 }}
                </p>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="align-center justify-center" v-if="item.buttons.length > 0">
              <div class="d-flex flex-row">
                <c-button
                  v-for="(btn, i) of item.buttons"
                  :key="i"
                  :icon="btn.icon"
                  :large="btn.xLarge"
                  :xLarge="btn.xLarge"
                  :small="btn.small"
                  :xSmall="btn.xSmall"
                  :link="btn.link"
                  :text="btn.text"
                  :name="btn.name"
                  :outlined="btn.outlined"
                  :plain="btn.plain"
                  :raised="btn.raised"
                  :rounded="btn.rounded"
                  :linkType="btn.link_type"
                  :url="btn.url"
                  :action="btn.action"
                  :color="btn.color"
                  :background="btn.background"
                  class="mr-3"
                />
              </div>
            </v-list-item>
          </v-card>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import CButton from "../../components/CButton.vue";

export default {
  name: "InfoSection",
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
    infoItems: function () {
      return this.getData[this.section].infoItems;
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