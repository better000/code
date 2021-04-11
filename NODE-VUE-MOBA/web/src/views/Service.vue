<template>
  <div>
    <div class="px-3 d-flex ai-center text-light fs-ml bg-lightTint">
      <img src="../assets/images/head_top.png" height="44"/>
      <h3 class="px-2 flex-1">玩家服务中心</h3>
      <i class="el-icon-switch-button"></i>
    </div>
    <van-notice-bar left-icon="volume-o"  mode="closeable" text="您好，因为检测到您在游戏中存有不良行为，目前您的信用值较低，请尽快申报处理。"/>
    <div class="mx-2 mt-3 bg-lightTint px-2 py-3">
      <van-cell value="内容" is-link @click="showOrder">
        <template #title>
          <span class="mr-2">[故障申报]</span>
          <van-tag type="success">已处理</van-tag>
        </template>
      </van-cell>
    </div>
    <van-pagination class="mb-3 mx-2" v-model="currentPage" :total-items="24" :items-per-page="5" />
    <div class="bg-lightTint p-2 mx-2 d-flex">
      <div class="service_foot1 flex-1 mr-2 text-center text-danger" @click="showPopup">
        <h2 class="mt-5 pt-4">玩家信息修改</h2>
      </div>
      <div class="service_foot2 flex-1 text-center text-danger" @click="showproblem">
        <h2 class="mt-5 pt-4">问题反馈</h2>
      </div>
    </div>
    <van-popup v-model="show" round closeable :style="{ height: '34%', width: '80%' }">
      <van-form @submit="onSubmit1" class="m-2">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"/>
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"/>
        <van-field
          v-model="credit"
          name="信用值"
          label="信用值"
          disabled/>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit1">提交</van-button>
        </div>
      </van-form>
    </van-popup>
    <van-popup v-model="problem" round closeable :style="{ height: '64%', width: '80%' }">
    <van-form @submit="onSubmit2" class="m-2">
      <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="申报类型"
        placeholder="点击选择申报类型"
        @click="showPicker = true"
      />
      <van-field
        v-model="value1"
        show-word-limit
        maxlength="100"
        autosize
        type="textarea"
        clearable
        name="申报内容"
        label="申报内容"
        placeholder="请输入具体申报内容"
      />
      <van-field name="uploader" label="证明材料">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="type"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit2">提交</van-button>
      </div>
    </van-form>
    </van-popup>
    <van-popup v-model="orderDetailed" round closeable :style="{ height: '64%', width: '80%' }">
    <van-form @submit="onSubmit2" class="m-2">
      <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="申报类型"
        placeholder="点击选择申报类型"
        @click="showPicker = true"
      />
      <van-field
        readonly
        v-model="value1"
        show-word-limit
        maxlength="100"
        autosize
        type="textarea"
        clearable
        name="申报内容"
        label="申报内容"
        placeholder="请输入具体申报内容"
      />
      <van-field name="uploader" label="证明材料">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <van-field
        readonly
        v-model="value1"
        show-word-limit
        maxlength="100"
        autosize
        type="textarea"
        clearable
        name="处理说明"
        label="处理说明"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="type"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
    </van-form>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      problem: false,
      orderDetailed: false,
      showPicker: false,
      currentPage: 1,
      username: '',
      password: '',
      credit: '',
      value: '',
      type: ['故障申报', '意见反馈', '举报玩家', '其他问题'],
      value1: '',
      uploader: []
    }
  },
  methods: {
    showOrder () {
      this.orderDetailed = true
    },
    showPopup () {
      this.show = true
    },
    showproblem () {
      this.problem = true
    },
    onSubmit1 (values) {
      console.log('submit1', values)
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    onSubmit2 (values) {
      console.log('submit2', values)
    }
  }
}
</script>

<style scoped>
.service_foot1 {
  width: 170px;
  height: 140px;
  background: url(../assets/images/service/bg1.jpg) no-repeat;
  background-size: 100% 100%;
}
.service_foot2 {
  background: url(../assets/images/service/bg2.jpg) no-repeat;
  background-size: 100% 100%;
}
</style>
