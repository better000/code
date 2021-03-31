<template>
  <div>
    <Top></Top>
    <router-link class="newtag pt-3 pb-4"  tag="div" :to="`/`">
      <div class="newtag1 mx-2"></div>
      <div class="newtag2"></div>
    </router-link>
    <div v-html="model.body" class="px-2 py-3"></div>
  </div>
</template>

<script>
import Top from '../components/topTitle.vue'
export default {
  components: {
    Top
  },
  props: {
    id: { required: true }
  },
  data () {
    return {
      model: ''
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created () {
    this.fetch()
  }
}
</script>
<style lang="scss">
@import '../assets/scss/main';
.newtag {
  border-bottom: 1px solid #e8e8e8;
}
.newtag1 {
  display:inline-block;
  width: 22px;
  height: 22px;
  background: url(../assets/images/sprite-icon1.png) no-repeat 0 0;
  background-position: 0px 2px;
}
.newtag2 {
  display:inline-block;
  width: 138px;
  height: 24px;
  background: url(../assets/images/sprite-icon.png) no-repeat 0 0;
  background-position: 0px 2px;
}
</style>
