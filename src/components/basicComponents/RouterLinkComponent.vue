<template>
  <router-link class="router-link-component" :to="to">
    <slot />
  </router-link>
</template>

<script>
function validatePropToData(propData) {
  if (propData instanceof Object) {
    return Object.prototype.hasOwnProperty.call(propData, "name");
  }
  return propData instanceof String;
}

export default {
  name: "RouterLinkComponent",
  props: {
    to: {
      type: [Object, String],
      required: true,
      validator: (propData) => validatePropToData(propData),
    },
  },
};
</script>

<style lang="scss">
.router-link-component {
  font-size: $font-size-base;
  color: $color-white;
  text-decoration: none;

  &:hover {
    color: $color-black;
  }
}
</style>
