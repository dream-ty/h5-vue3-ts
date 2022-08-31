<template>
  <RouterView v-slot="{ Component }">
    <keep-alive :include="includeList">
      <component :is="Component" />
    </keep-alive>
  </RouterView>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
// import type {} from 'vue'
const route = useRoute();
const includeList = ref<string[]>([]);
watchEffect(() => {
  const data = new Set(includeList.value);
  if (route.meta.keepAlive) {
    console.log('route.name', route.name);
    
    data.add(route.name as string);
  }
  includeList.value = Array.from(data);
});
</script>

<style scoped></style>
