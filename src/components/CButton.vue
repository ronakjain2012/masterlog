<template>
  <div class="c-button">
    <router-link
      v-if="link && linkType == 'internal'"
      :to="url"
      class="text-decoration-none"
    >
      <v-btn
        :text="text"
        :outlined="outlined"
        :plain="plain"
        :rounded="rounded"
        :raised="raised"
        :small="small"
        :large="large"
        :x-large="xLarge"
        :x-small="xSmall"
        :color="background"
        :style="{ color: color }"
      >
        <v-icon>
          {{ icon }}
        </v-icon>
        {{ name }}</v-btn
      >
    </router-link>
    <v-btn
      :text="text"
      :outlined="outlined"
      :plain="plain"
      :rounded="rounded"
      :raised="raised"
      :small="small"
      :large="large"
      :x-large="xLarge"
      :x-small="xSmall"
      :color="background"
      v-else
    >
      <a
        v-if="link"
        :href="url"
        class="text-decoration-none"
        :style="{ color: color }"
      >
        <v-icon>
          {{ icon }}
        </v-icon>
        {{ name }}</a
      >
      <span v-else :style="{ color: color }">
        <v-icon>
          {{ icon }}
        </v-icon>
        {{ name }}
      </span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "CButton",
  props: {
    action: String,
    url: String,
    text: Boolean,
    outlined: Boolean,
    plain: Boolean,
    rounded: Boolean,
    raised: Boolean,
    name: String,
    icon: String,
    small: Boolean,
    large: Boolean,
    link: Boolean,
    linkType: String,
    xLarge: Boolean,
    xSmall: Boolean,
    color: {
      default: "white",
      type: String,
    },
    background: {
      default: "white",
      type: String,
    },
  },
  data: () => ({}),
};
</script>