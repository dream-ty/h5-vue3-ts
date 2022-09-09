<template>
  <main>
    <div class="public-page-contain">
      <div>首页</div>
      <div @click="toPage('about')">about页</div>
      <van-button plain type="success" @click="click">中国</van-button> 
      <van-field type="text" v-model="value" placeholder="" />
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
import { onActivated, ref } from "vue";
import { Toast } from 'vant'
const router = useRouter();
const value = ref('')
const toPage = (pathName: string) => {
  router.push({ name: pathName });
};
const click = () => {
  Toast('aaaaaa')
}
onActivated(() => {
  console.log("触发了路由激活");
});
</script>
