<template>
  <div class="main">
    <yd-nav></yd-nav>
    <keep-alive>
      <router-view :key="$route.path"></router-view>
    </keep-alive>

  </div>
</template>

<script>
import ydNav from '@/components/ydNav.vue'
export default {
  components: {
    ydNav
  }
}
</script>

<style>
  /* .main{
    background-color: #f0f0f0;
  } */
</style>
