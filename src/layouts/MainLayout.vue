<template>
  <div class="main-layout">
    <div class="main-layout__content-wrapper">
      <div class="main-layout__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style lang="scss">
.main-layout {
  height: 100vh;

  &__content {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    background-color: $color-white-dark;
  }

  &__content-wrapper {
    height: 100%;
    width: 100%;
  }
}
</style >
