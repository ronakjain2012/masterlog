<template>
  <v-app>
    <toolbar v-if="!apiCallsInProgress"></toolbar>
    <v-main>
      <v-overlay :absolute="true" :opacity="1" :value="apiCallsInProgress">
        <svg
          version="1.1"
          id="L7"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
          xml:space="preserve"
          height="200"
          width="200"
        >
          <path
            fill="#d2f6c5"
            d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="2s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
          <path
            fill="#99f3bd"
            d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="-360 50 50"
              repeatCount="indefinite"
            />
          </path>
          <path
            fill="#28df99"
            d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="2s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </v-overlay>
      <router-view v-if="!apiCallsInProgress" />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./views/header/Toolbar.vue";
import { HTTP } from "./plugins/http";
import { mapGetters } from "vuex";

export default {
  components: { Toolbar },
  name: "App",
  data: () => ({
    //
  }),
  mounted() {
    let that = this;
    that.$store.dispatch("incrementApiCall");
    HTTP.get("https://api.npoint.io/0fcdc3138e986c95dd3f", {})
      .then(function (response) {
        if (response.status == 200) {
          that.$store.dispatch("incrementApiSuccess");
          that.$store.dispatch("setMasterData", response.data);
        } else {
          console.log(response);
          that.$store.dispatch("incrementApiFail");
        }
      })
      .catch(function (error) {
        console.log(error);
        that.$store.dispatch("incrementApiFail");
      })
      .finally(function () {
        that.$store.dispatch("decrementApiCall");
      });
  },
  computed: {
    ...mapGetters(["apiCallsInProgress", "apiCalls", "getData"]),
  },
};
</script>
