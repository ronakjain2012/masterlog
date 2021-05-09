<template>
  <v-container class="py-16 product-list">
    <v-card class="py-16 my-auto text-left" flat>
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
        <div class="d-flex justify-space-around mb-6">
          <v-gallery
            :images="infoItems"
            class="image-box d-flex justify-space-around"
          >
            <a
              v-for="(item, i) of infoItems"
              :key="'info' + i"
              :data-image="item.image"
              :title="item.heading"
            >
              <v-card
                :key="'infocard' + i"
                :max-width="infoSettings.max_width"
                :min-width="infoSettings.min_width"
                :color="item.background_color"
                :style="{ background: `url(${item.background_img})` }"
                :shaped="infoSettings.shaped"
                :elevation="infoSettings.elevation"
                :flat="infoSettings.flat"
                class="mr-2 mt-3"
              >
                <div class="text-center bgbox">
                  <v-img
                    :height="item.ii_size"
                    :src="item.image"
                    :lazy-src="item.image_thumb || item.image"
                    v-if="item.image"
                    class="align-end bgbox"
                  >
                    <v-card-title
                      v-if="item.heading"
                      :style="{ color: item.heading_color }"
                      >{{ item.heading }}
                      <span
                        class="caption"
                        v-if="item.desc1"
                        :style="{ color: item.desc1_color }"
                      >
                        &nbsp;({{ item.desc1 }})
                      </span>
                    </v-card-title>
                  </v-img>
                  <v-icon
                    v-if="item.icon"
                    :size="item.ii_size"
                    :color="item.icon_color"
                    >{{ item.icon }}
                  </v-icon>
                  <v-card-title
                    v-if="item.heading && !item.image"
                    :style="{ color: item.heading_color }"
                    >{{ item.heading }}
                    <span
                      class="caption"
                      v-if="item.desc1"
                      :style="{ color: item.desc1_color }"
                    >
                      &nbsp;({{ item.desc1 }})
                    </span>
                  </v-card-title>
                </div>
                <v-divider class="mx-1"></v-divider>
                <v-card-text v-if="item.price || item.desc2 || item.rating">
                  <div class="my-1 subtitle-1" v-if="item.price">
                    <span :style="{ color: item.currency_color }">{{
                      item.currency
                    }}</span>
                    <span :style="{ color: item.price_color }">{{
                      item.price
                    }}</span>
                  </div>
                  <div v-if="item.desc2" :style="{ color: item.desc2_color }">
                    {{ item.desc2 }}
                  </div>
                  <v-row align="center" class="mx-0 my-1">
                    <v-rating
                      v-if="item.rating"
                      :value="item.rating"
                      :color="item.heading_color"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                    <div
                      class="ml-4"
                      v-if="item.rating"
                      :style="{ color: item.heading_color }"
                    >
                      {{ item.rating }} ({{ item.rating_by }})
                    </div>
                  </v-row>
                </v-card-text>

                <v-list-item
                  class="align-center justify-center"
                  v-if="item.buttons.length > 0"
                >
                  <div class="d-flex flex-row flex-wrap">
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
            </a>
          </v-gallery>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import CButton from "../../components/CButton.vue";
import vGallery from "v-gallery";
import Vue from "vue";
Vue.use(vGallery);

export default {
  name: "ProductGalleryList",
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
    galleryItems: function () {
      var newData = this.infoItems.map(function (item) {
        return {
          title: item.heading,
          url: item.image,
          full: item,
        };
      });
      return newData;
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

<style lang="scss">
.product-list {
  .v-gallery {
    .lightBoxGallery {
      display: flex !important;
      justify-content: space-around !important;
      flex-wrap: wrap !important;
    }
  }
}
.v-gallery .blueimp-gallery-controls a {
  &.next {
    line-height: 44px;
  }
  &.prev {
    line-height: 44px;
  }
}
</style>
