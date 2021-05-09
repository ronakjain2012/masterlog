<template>
  <v-bottom-navigation horizontal height="60" v-if="infoSettings.length">
    <v-btn
      text
      class="d-none d-lg-block d-md-block"
      v-for="(menu, index) of infoSettings"
      :key="index"
    >
      <router-link :to="menu.link" class="text-decoration-none">
        <v-icon>
          {{ menu.icon }}
        </v-icon>
        &nbsp;
        <span>{{ menu.name }}</span>
        
      </router-link>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TopMenuList",
  components: {},
  computed: {
    ...mapGetters(["getData", "dataLoaded"]),
    infoSettings: function () {
      return this.getData["header"].menu;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-bottom-navigation {
  box-shadow: none !important;
  .v-btn.v-size--default {
    height: auto !important;
  }
}
</style>
