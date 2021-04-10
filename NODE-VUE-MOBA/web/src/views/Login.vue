<template>
  <div>
    <div class="text-center" v-show="showLogin">
      <h3>请先登录</h3>
      <input type="text" placeholder="请输入用户名" v-model="model.username">
      <input type="password" placeholder="请输入密码" v-model="model.password">
      <button v-on:click="login">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="text-center" v-show="showRegister">
      <h3>注册</h3>
      <input type="text" placeholder="请输入用户名" v-model="newmodel.newUsername">
      <input type="password" placeholder="请输入密码" v-model="newmodel.newPassword">
      <input type="password" placeholder="请确认密码" v-model="newmodel.renewPassword">
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      model: {
        username: '',
        password: ''
      },
      newmodel: {
        newUsername: '',
        newPassword: '',
        renewPassword: '',
        credit: 0
      }
    }
  },
  methods: {
    // 登录
    async login () {
      const res = await this.$http.post('login', this.model)
      console.log(res.data)
      sessionStorage.token = res.data.token
      this.$router.push('/service')
    },
    // 注册
    async register () {
      const res = await this.$http.post('register', this.newmodel)
      console.log(res.data)
    },
    // 打开登录界面
    ToLogin () {
      this.showRegister = false
      this.showLogin = true
    },
    // 打开注册界面
    ToRegister () {
      this.showRegister = true
      this.showLogin = false
    }
  }
}
</script>
<style scoped>
input {
  display: block;
  width: 260px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}
button {
  display: block;
  width: 260px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}
span {
  cursor: pointer;
}
span:hover {
  color: #41b883;
}
</style>
