 
<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { layoutNames } from '@/utils/constants'
import { ErrorLayout, MainLayout } from '@/layouts'

export default {
  data: () => ({
    layouts: {
      ErrorLayout,
      MainLayout
    }
  }),

  computed: {
    layout () {
      const layoutName = this.$route.meta.layout || layoutNames.MAIN_LAYOUT

      return this.layouts[layoutName]
    }
  }
}

</script>

<style lang="scss" >
@import "./assets/styles/common/index";

#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: $font-size-large;
}
</style>
