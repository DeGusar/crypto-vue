<template>
  <section class="main-page">
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style lang="scss">
.main-page {
  display: flex;
  height: 100%;
}
</style>
