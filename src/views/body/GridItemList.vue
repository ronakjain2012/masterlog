<template>
  <v-container class="py-16">
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
        <v-row class="mb-6">
          <v-col
            v-for="(item, i) of infoItems"
            :key="'info' + i"
            :color="item.background_color"
            :style="{ background: `url(${item.background_img})` }"
            justify-space-around
            cols="12"
            :md="item.ii_size"
          >
            <router-link
              v-if="item.link && item.link_type == 'internal'"
              :to="item.url"
              class="text-decoration-none"
            >
              <div class="text-center">
                <v-img
                  :src="item.image"
                  :lazy-src="item.image_thumb || item.image"
                  v-if="item.image"
                  class="align-start"
                >
                  <v-card-title
                    v-if="item.heading"
                    :style="{ color: item.heading_color }"
                    class="py-1"
                    >{{ item.heading }}
                  </v-card-title>
                  <v-card-title v-if="item.desc1" class="py-1">
                    <span class="caption" :style="{ color: item.desc1_color }">
                      &nbsp;({{ item.desc1 }})
                    </span>
                  </v-card-title>
                  <v-card-title v-if="item.desc2" class="py-1">
                    <span class="caption" :style="{ color: item.desc2_color }">
                      &nbsp;({{ item.desc2 }})
                    </span>
                  </v-card-title>
                  <v-card-title v-if="item.price" class="py-1">
                    <div class="my-1 subtitle-1">
                      <span :style="{ color: item.currency_color }"
                        >{{ item.currency }} &nbsp;</span
                      >
                      <span :style="{ color: item.price_color }">{{
                        item.price
                      }}</span>
                    </div>
                  </v-card-title>
                  <v-card-title v-if="item.rating" class="py-0">
                    <v-rating
                      :value="item.rating"
                      :color="item.heading_color"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                    <div class="ml-4" :style="{ color: item.heading_color }">
                      {{ item.rating }} ({{ item.rating_by }})
                    </div>
                  </v-card-title>
                </v-img>
              </div>
            </router-link>
            <a
              v-else-if="item.link && item.link_type != 'internal'"
              :href="item.url"
              class="text-decoration-none"
            >
              <div class="text-center">
                <v-img
                  :src="item.image"
                  :lazy-src="item.image_thumb || item.image"
                  v-if="item.image"
                  class="align-start"
                >
                  <v-card-title
                    v-if="item.heading"
                    :style="{ color: item.heading_color }"
                    class="py-1"
                    >{{ item.heading }}
                  </v-card-title>
                  <v-card-title v-if="item.desc1" class="py-1">
                    <span class="caption" :style="{ color: item.desc1_color }">
                      &nbsp;({{ item.desc1 }})
                    </span>
                  </v-card-title>
                  <v-card-title v-if="item.desc2" class="py-1">
                    <span class="caption" :style="{ color: item.desc2_color }">
                      &nbsp;({{ item.desc2 }})
                    </span>
                  </v-card-title>
                  <v-card-title v-if="item.price" class="py-1">
                    <div class="my-1 subtitle-1">
                      <span :style="{ color: item.currency_color }"
                        >{{ item.currency }} &nbsp;</span
                      >
                      <span :style="{ color: item.price_color }">{{
                        item.price
                      }}</span>
                    </div>
                  </v-card-title>
                  <v-card-title v-if="item.rating" class="py-0">
                    <v-rating
                      :value="item.rating"
                      :color="item.heading_color"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                    <div class="ml-4" :style="{ color: item.heading_color }">
                      {{ item.rating }} ({{ item.rating_by }})
                    </div>
                  </v-card-title>
                </v-img>
              </div>
            </a>
            <a class="text-center" v-else>
              <v-img
                :src="item.image"
                :lazy-src="item.image_thumb || item.image"
                v-if="item.image"
                class="align-start"
              >
                <v-card-title
                  v-if="item.heading"
                  :style="{ color: item.heading_color }"
                  class="py-1"
                  >{{ item.heading }}
                </v-card-title>
                <v-card-title v-if="item.desc1" class="py-1">
                  <span class="caption" :style="{ color: item.desc1_color }">
                    &nbsp;({{ item.desc1 }})
                  </span>
                </v-card-title>
                <v-card-title v-if="item.desc2" class="py-1">
                  <span class="caption" :style="{ color: item.desc2_color }">
                    &nbsp;({{ item.desc2 }})
                  </span>
                </v-card-title>
                <v-card-title v-if="item.price" class="py-1">
                  <div class="my-1 subtitle-1">
                    <span :style="{ color: item.currency_color }"
                      >{{ item.currency }} &nbsp;</span
                    >
                    <span :style="{ color: item.price_color }">{{
                      item.price
                    }}</span>
                  </div>
                </v-card-title>
                <v-card-title v-if="item.rating" class="py-0">
                  <v-rating
                    :value="item.rating"
                    :color="item.heading_color"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <div class="ml-4" :style="{ color: item.heading_color }">
                    {{ item.rating }} ({{ item.rating_by }})
                  </div>
                </v-card-title>
              </v-img>
            </a>
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
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import CButton from "../../components/CButton.vue";

export default {
  name: "GridItemList",
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