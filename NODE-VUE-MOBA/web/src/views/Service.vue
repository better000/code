<template>
  <div>
    <div class="px-3 d-flex ai-center text-light fs-ml bg-lightTint">
      <img src="../assets/images/head_top.png" height="44"/>
      <h3 class="px-2 flex-1">玩家服务中心</h3>
      <i class="el-icon-switch-button" @click="loginOut"></i>
    </div>
    <van-notice-bar v-if="player.credit === 1" left-icon="volume-o" mode="closeable" text="您好，因为检测到您在游戏中存有不良行为，目前您的信用值较低,请尽快申报处理，以免影响您的游戏体验。"/>
    <van-notice-bar v-if="player.credit === 0" left-icon="volume-o" mode="closeable" text="您的信用良好，请继续保持，有什么问题请及时向我们反馈哦。"/>
    <div class="mx-2 mt-3 bg-lightTint px-2 py-3">
      <van-cell :value= item.feedback is-link @click="showOrder(item._id)" v-for="(item,index) in model" :key="index">
        <template #title>
          <span class="mr-2">[{{item.type}}]</span>
          <van-tag v-if="item.status === 0" type="danger">未处理</van-tag>
          <van-tag v-if="item.status === 1" type="success">已处理</van-tag>
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
          v-model="player.username"
          name="username"
          label="用户名"
          placeholder="用户名"/>
        <van-field
          v-model="player.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"/>
        <van-field
          v-model="credit"
          name="credit"
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
        name="type"
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
        name="feedback"
        label="申报内容"
        placeholder="请输入具体申报内容"
      />
      <van-field name="material" label="证明材料">
        <template #input>
          <van-uploader v-model="uploader" :after-read="afterRead"/>
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
    <van-form class="m-2">
      <van-field
        readonly
        clickable
        :value="faultdetails.type"
        label="申报类型"
      />
      <van-field
        readonly
        v-model="faultdetails.feedback"
        show-word-limit
        maxlength="100"
        autosize
        type="textarea"
        clearable
        label="申报内容"
        placeholder="请输入具体申报内容"
      />
      <van-field name="material" label="证明材料">
        <template #input>
          <van-image
            width="100"
            height="100"
            :src="faultdetails.material">
          </van-image>
        </template>
      </van-field>
      <van-field
        readonly
        v-model="faultdetails.handle"
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
  props: {
    id: { required: true }
  },
  data () {
    return {
      show: false,
      problem: false,
      orderDetailed: false,
      showPicker: false,
      currentPage: 1,
      player: '',
      credit: '',
      value: '',
      type: ['故障申报', '意见反馈', '举报玩家', '其他问题'],
      value1: '',
      uploader: [],
      model: '',
      faultdetails: ''
    }
  },
  methods: {
    // 获取申报详情
    async showOrder (id) {
      this.orderDetailed = true
      const res = await this.$http.get(`orders/${id}`)
      this.faultdetails = res.data
      console.log(this.faultdetails)
    },
    showPopup () {
      this.show = true
    },
    showproblem () {
      this.problem = true
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    // 退出登陆
    loginOut () {
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(async () => {
        window.sessionStorage.clear()
        this.$message({
          showClose: true,
          type: 'success',
          message: '退出成功'
        })
        this.$router.push('/')
      }).catch(() => {
          this.$message({
            showClose: true,
            type: 'info',
            message: '已取消退出'
        })
      })
    },
    // 获取玩家数据
    async fetchplayer () {
      const res = await this.$http.get(`player/${this.id}`)
      console.log(res)
      this.player = res.data.data
      this.credit = this.player.credit === 0 ? '信用高' : '黑名单'
      this.model = res.data.model
    },
    // 编辑玩家信息
    async onSubmit1 (values) {
      values.credit = this.player.credit
      const res = await this.$http.put(`player/${this.id}`, values)
      this.player = res.data
      this.fetchplayer()
      this.$message({
        message: '信息修改成功',
        type: 'success'
      })
      this.show = false
    },

    // 图片上传
    async afterRead (file) {
      console.log(file)
      const fd = new FormData()
      fd.append('file', file.file)
      const res = await this.$http.post('upload/material', fd)
      this.$set(this.player, 'material', res.data.url)
    },

    // 提交问题申报
    async onSubmit2 (values) {
      var params = {
        applicant: this.id,
        type: values.type,
        status: 0,
        material: this.player.material,
        feedback: values.feedback,
        handle: ''
      }
      const res = await this.$http.post('orders', params)
      console.log(res)
      this.fetchplayer()
      this.$message({
        message: '反馈提交成功',
        type: 'success'
      })
      this.problem = false
      this.value = ''
      this.value1 = ''
    }
  },
  created () {
    this.fetchplayer()
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
