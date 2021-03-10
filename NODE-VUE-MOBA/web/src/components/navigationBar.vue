<template>
  <van-tabs v-model="active1">
    <van-tab  v-for="(category, i) in categories" :key="i" :title="category.name">
        <slot name="items" :category="category"></slot>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  props: {
    categories: { type: Array, required: true }
  },
  data () {
    return {
      active1: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components';
</style>
