<template>
  <van-tabs v-model="active1">
    <van-tab title="标签"><slot></slot></van-tab>
    <van-tab title="标签"><slot></slot></van-tab>
    <van-tab title="标签"><slot></slot></van-tab>
    <van-tab title="标签"><slot></slot></van-tab>
    <van-tab title="标签"><slot></slot></van-tab>
  </van-tabs>
</template>

<script>
export default {
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
