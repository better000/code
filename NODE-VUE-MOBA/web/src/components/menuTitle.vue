<template>
  <div class="menu_title">
    <van-cell title="活动中心">
      <template #right-icon v-if="flase">
        <van-icon class="activity" />
        <span class="activity_span">活动中心</span>
      </template>
      <template #right-icon>
        <span class="more mr-3 text-lightGray">更多 +</span>
      </template>
    </van-cell>
    <slot></slot>
  </div>
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
