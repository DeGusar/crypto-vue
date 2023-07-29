<template>
  <div class="error404-page">
    <RouterLinkComponent
      :to="routeMainPage"
    >
      Home
    </RouterLinkComponent>
    <h2>Error404</h2>
  </div>
</template>

<script>
import { urlNames } from '@/utils/constants'
import { RouterLinkComponent } from '@/components/basicComponents'

export default {
  name: 'Error404Page',
  components: { RouterLinkComponent },

  data: () => ({
    routeMainPage: { name: urlNames.MAIN_PAGE }
  })
}
</script>

<style lang='scss'>
  .error404-page {
    background-color: $color-white;
    color: $color-black;
    height: 100vh;
  }
</style>
