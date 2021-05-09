<template>
  <div
    :class="['custom-snackbar', 'd-flex', 'x-' + this.index + '-snack']"
    :style="{ top: topM }"
  >
    <div class="custom-snackbar-content">
      <v-card class="text-center" :color="snackbarColor" >
        <v-card-text>
          <v-row>
            <v-col :style="{ color: textcolor }">
              {{ text }}
            </v-col>
            <v-col cols="2"> <div class="d-flex justify-center align-center fill-height">
                <v-btn text fab large @click="removeSnack">
                  <v-icon :color="textcolor">mdi-glasses</v-icon>
                </v-btn>
              </div> </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
  <!--   
  <v-snackbar v-model="snackbar" outlined :timeout="forTime" top>
    {{ text }}
    <template v-slot:action>
      <v-btn :color="snackbarColor" text @click="removeSnack">
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </template>
  </v-snackbar> -->
</template>

<script>
export default {
  name: "SnackBar",
  props: {
    index: Number,
    text: String,
    stype: {
      default: "success",
      type: String,
    },
    forTime: {
      default: 3000,
      type: Number,
      textcolor: 'black'
    },
  },
  data: () => ({
    timer: null,
    snackbar: true,
  }),
  mounted() {
    let that = this;
    this.timer = setTimeout(function () {
      that.$store.dispatch("removeSnack", that.index);
    }, this.forTime);
  },
  distributed() {
    this.removeSnack();
  },
  methods: {
    removeSnack: function () {
      this.timer = null;
      (this.snackbar = false), this.$store.dispatch("removeSnack", this.index);
    },
  },
  computed: {
    topM: function () {
      var nodes = document.querySelectorAll("div.custom-snackbar");
      if (nodes[this.index - 1]) {
        var size = nodes[this.index - 1].getBoundingClientRect();
        return size.y + size.height + 12;
      } else {
        return 0;
      }
    },
    snackbarColor: function () {
      if (this.stype == "success") {
        this.textcolor = 'white'
        return "green darken-2";
      } else if (this.stype == "danger") {
        this.textcolor = 'white'
        return "red darken-3";
      } else if (this.stype == "info") {
        this.textcolor = 'white'
        return "blue-grey darken-2";
      } else {
        this.textcolor = 'white'
        return "blue-grey darken-2";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-snackbar {
  padding: 0px;
  margin: 20px;
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: max-content;
  width: max-content;
  .custom-snackbar-content {
    max-width: 30vw;
    min-width: 30vw;
    height: max-content;
  }
}
</style>