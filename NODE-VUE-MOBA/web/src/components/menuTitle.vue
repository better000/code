<template>
  <div class="menu_title">
    <van-cell :title="title">
      <template #right-icon v-if="title === '活动中心'">
        <van-icon class="activity" />
        <span class="activity_span">{{title}}</span>
      </template>
      <template #right-icon v-else>
        <span class="more mr-3 text-lightGray">更多 +</span>
      </template>
    </van-cell>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true }
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
