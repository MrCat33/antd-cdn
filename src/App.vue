<template>
  <div>
    这里是ui-scaffolding@@@@@@ <span>{{ num }}</span>
  </div>
  <div>
    <Button @click="watchNumber">第一个按钮</Button>
    <Button type="primary">第二个按钮</Button>
    <Button danger>第三个按钮</Button>
    <Button type="dashed">第四个按钮</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'
import { ref } from 'vue'

const num = ref(0)

const watchNumber = () => {
  num.value++
}
</script>

<style scoped>
</style>
