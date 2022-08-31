<template>
  <div class="about">
    <h1 @click="toPage('home')">This is an about page</h1>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const toPage = (pathName: string) => {
  router.push({ name: pathName });
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
