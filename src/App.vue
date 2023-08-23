<template>
  <div class="app-index">
    <GlobalMenu />
    <router-view />
    <InfoCard />
  </div>
</template>

<script setup lang="ts">
import InfoCard from './components/InfoCard.vue';
import GlobalMenu from '@/components/GlobalMneu.vue';
</script>

<style lang="scss" scoped>
.app-index {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  display: flex;
}
</style>
