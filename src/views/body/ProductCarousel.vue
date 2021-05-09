<template>
  <v-carousel
    v-if="dataLoaded"
    v-model="model"
    :delimiter-icon="carouselSettings.delimiterIcon"
    :hide-delimiter="carouselSettings.hideDelimiter"
    :hide-delimiter-background="carouselSettings.hideDelimiterBackground"
    :cycle="carouselSettings.cycle"
    :show-arrows-on-hover="carouselSettings.showArrowsOnHover"
    :interval="carouselSettings.interval"
    :height="settings.data.height"
  >
    <v-carousel-item v-for="(item, i) in carouselItems" :key="i">
      <v-sheet
        :color="item.background_color"
        :style="{ background: `url(${item.background_img})` }"
        height="100%"
        tile
      >
        <v-container
          fluid
          class="fill-height d-flex align-content-space-between flex-wrap"
        >
          <v-row align="start">
            <v-col>
              <div
                v-if="item.top_left.show"
                :style="{ color: item.text_color }"
              >
                <h1
                  v-show="item.top_left.heading"
                  class="text-uppercase font-weight-bold display-3 font-weight-black mb-4 text-left"
                >
                  {{ item.top_left.heading }}
                </h1>
                <h1
                  v-show="item.top_left.desc1"
                  class="headline font-weight-bold mb-4 text-left"
                >
                  {{ item.top_left.desc1 }}
                </h1>
                <p v-show="item.top_left.desc2" class="mb-10">
                  {{ item.top_left.desc2 }}
                </p>
                <div class="d-flex flex-row align-center" v-if="item.top_left.buttons.length > 0">
                  <c-button
                    v-for="(btn, i) of item.top_left.buttons"
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
              </div>
            </v-col>
            <v-col>
              <div
                v-if="item.top_right.show"
                :style="{ color: item.text_color }"
              >
                <h1
                  v-show="item.top_right.heading"
                  class="text-uppercase font-weight-bold display-3 font-weight-black mb-4 text-left"
                >
                  {{ item.top_right.heading }}
                </h1>
                <h1
                  v-show="item.top_right.desc1"
                  class="headline font-weight-bold mb-4 text-left"
                >
                  {{ item.top_right.desc1 }}
                </h1>
                <p v-show="item.top_right.desc2" class="mb-10">
                  {{ item.top_right.desc2 }}
                </p>
                <div class="d-flex flex-row align-center" v-if="item.top_right.buttons.length > 0">
                  <c-button
                    v-for="(btn, i) of item.top_right.buttons"
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
              </div>
            </v-col>
          </v-row>
          <v-row align="end" class="align-self-end">
            <v-col>
              <div
                v-if="item.buttom_left.show"
                :style="{ color: item.text_color }"
              >
                <h1
                  v-show="item.buttom_left.heading"
                  class="text-uppercase font-weight-bold display-3 font-weight-black mb-4 text-left"
                >
                  {{ item.buttom_left.heading }}
                </h1>
                <h1
                  v-show="item.buttom_left.desc1"
                  class="headline font-weight-bold mb-4 text-left"
                >
                  {{ item.buttom_left.desc1 }}
                </h1>
                <p v-show="item.buttom_left.desc2" class="mb-10">
                  {{ item.buttom_left.desc2 }}
                </p>
                <div class="d-flex flex-row align-center" v-if="item.buttom_left.buttons.length > 0">
                  <c-button
                    v-for="(btn, i) of item.buttom_left.buttons"
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
              </div>
            </v-col>
            <v-col>
              <div
                v-if="item.buttom_right.show"
                :style="{ color: item.text_color }"
              >
                <h1
                  v-show="item.buttom_right.heading"
                  class="text-uppercase font-weight-bold display-3 font-weight-black mb-4 text-left"
                >
                  {{ item.buttom_right.heading }}
                </h1>
                <h1
                  v-show="item.buttom_right.desc1"
                  class="headline font-weight-bold mb-4 text-left"
                >
                  {{ item.buttom_right.desc1 }}
                </h1>
                <p v-show="item.buttom_right.desc2" class="mb-10">
                  {{ item.buttom_right.desc2 }}
                </p>
                <div class="d-flex flex-row align-center" v-if="item.buttom_right.buttons.length > 0">
                  <c-button
                    v-for="(btn, i) of item.buttom_right.buttons"
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
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapGetters } from "vuex";
import CButton from "../../components/CButton.vue";

export default {
  name: "ProductCarousel",
  components: { CButton },
  data: () => ({
    model: 0,
  }),
  props: ["section", "settings"],
  computed: {
    ...mapGetters(["getData", "dataLoaded"]),
    carouselSettings: function () {
      return this.getData[this.section].carousel.settings;
    },
    carouselItems: function () {
      return this.getData[this.section].carousel.items;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-sheet {
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}
</style>