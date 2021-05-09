<template>
  <div class="main-body">
    <div v-if="dataLoaded">
      <section v-for="(section, i) in sections" :key="'section-' + i">
        <product-carousel
          v-if="
            sectionsSettings[section].type == 'carousel' &&
            sectionsSettings[section].show
          "
          :section="section"
          :settings="sectionsSettings[section]"
        />
        <info-section
          v-if="
            sectionsSettings[section].type == 'info' &&
            sectionsSettings[section].show
          "
          :section="section"
          :settings="sectionsSettings[section]"
        />
        <mini-info-section
          v-if="
            sectionsSettings[section].type == 'mini_info' &&
            sectionsSettings[section].show
          "
          :section="section"
          :settings="sectionsSettings[section]"
        />
        <item-list
          v-if="
            sectionsSettings[section].type == 'item_list' &&
            sectionsSettings[section].show
          "
          :section="section"
          :settings="sectionsSettings[section]"
        />
        <product-gallery-list
          v-if="
            sectionsSettings[section].type == 'product_gallery' &&
            sectionsSettings[section].show
          "
          :section="section"
          :settings="sectionsSettings[section]"
        />
        <grid-item-list
          v-if="
            sectionsSettings[section].type == 'grid_view' &&
            sectionsSettings[section].show
          "
          :section="section"
          :settings="sectionsSettings[section]"
        />
        <newsletter
          v-if="
            sectionsSettings[section].type == 'newsletter' &&
            sectionsSettings[section].show
          "
          :section="section"
          :settings="sectionsSettings[section]"
        />
        <contact-us
          v-if="
            sectionsSettings[section].type == 'contactus' &&
            sectionsSettings[section].show
          "
          :section="section"
          :settings="sectionsSettings[section]"
        />

        <footer-1
          v-if="
            sectionsSettings[section].type == 'footer1' &&
            sectionsSettings[section].show
          "
          :section="section"
          :settings="sectionsSettings[section]"
        />
      </section>
    </div>
    <snack-bar v-for="(item,i) of snackbars" :key="i" :text="item.text" :index="i" :stype="item.stype" :forTime="item.forTime"/>
  </div>
</template>

<script>
import ProductCarousel from "./ProductCarousel.vue";
import { mapGetters } from "vuex";
import InfoSection from "./InfoSection.vue";
import MiniInfoSection from "./MiniInfoSection.vue";
import ItemList from "./ItemList.vue";
import ProductGalleryList from "./ProductGalleryList.vue";
import GridItemList from "./GridItemList.vue";
import Newsletter from "./Newsletter.vue";
import ContactUs from "./ContactUs.vue";
import SnackBar from '../../components/SnackBar.vue';
import Footer1 from './Footer1.vue';

export default {
  name: "Main",
  components: {
    ProductCarousel,
    InfoSection,
    MiniInfoSection,
    ItemList,
    ProductGalleryList,
    GridItemList,
    Newsletter,
    ContactUs,
    SnackBar,
    Footer1
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["getData", "dataLoaded","snackbars"]),
    sections() {
      return this.getData.sections.displayAs;
    },
    sectionsSettings() {
      return this.getData.sections.sectionSettings;
    },
  },
};
</script>
