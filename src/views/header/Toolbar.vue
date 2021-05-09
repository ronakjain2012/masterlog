<template>
  <div class="main-toolbar" v-if="dataLoaded">
    <v-toolbar height="90" fixed>
      <v-toolbar-title>
        <v-row class="align-center">
          <v-col>
            <v-img
              width="50"
              :src="appSettings.logo"
            ></v-img>
          </v-col>
          <v-col> {{appSettings.name}} </v-col>
        </v-row>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h2 class="d-none d-lg-block d-md-block">{{appSettings.name}}</h2>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text class="d-none d-lg-block d-md-block" v-for="(menu,index) of infoSettings.right" :key="index">
          <router-link :to="menu.link" class="text-decoration-none">
            <v-icon>
              {{menu.icon}}
            </v-icon>
            {{menu.name}}
            </router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <top-menu-list></top-menu-list>
  </div>
</template>

<script>
import TopMenuList from "./TopMenuList.vue";
import { mapGetters } from "vuex";

export default {
  name: "Toolbar",
  components: { TopMenuList },
  computed: {
    ...mapGetters(["getData", "dataLoaded"]),
    infoSettings: function () {
      return this.getData['header'];
    },
    appSettings: function () {
      return this.getData['app'];
    },
  },
};
</script>
