<template>
  <main>
    <div class="public-page-contain">
      <div>首页</div>
      <div @click="toPage('about')">about页</div>
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>
<script lang="ts">
export default {
  name: "home",
};
</script>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { onActivated } from "vue";
const router = useRouter();
const toPage = (pathName: string) => {
  router.push({ name: pathName });
};
onActivated(() => {
  console.log("触发了路由激活");
});
</script>
