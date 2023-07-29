<template>
  <div class="main-page">
    <router-view></router-view>
  </div>
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
