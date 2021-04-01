<template>
  <el-container style="height: 100vh">
    <!-- 头部 -->
    <el-header style="text-align: right; font-size: 12px">
      <div class="logo-title">
        <img src="../assets/img/home/logo.png"
             alt="地下城与勇士"
             height="50px">
        <h2>地下城与勇士-DNF-后台管理系统</h2>
      </div>
      <el-button type="text"
                 size="middle"
                 style="color:grey"
                 @click="loginOut"> <i class="el-icon-switch-button"
           style="color:#fdb933"></i> 退出</el-button>
    </el-header>

    <el-container>
      <!-- 侧边栏菜单 -->
      <el-aside width="201px"
                style="background-color: #252a40">
        <el-menu router
                 :default-active="activePath"
                 unique-opened
                 background-color="#252a40"
                 text-color="#fff"
                 active-text-color="#fdb933">
          <!-- 信息管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>信息管理
            </template>
            <el-menu-item-group>
              <!-- 内容管理一级菜单 -->
              <el-submenu index="1-1">
                <template slot="title">
                  <i class="el-icon-s-fold"></i>分类管理
                </template>
                <!-- 内容管理二级菜单 -->
                <el-menu-item-group>
                  <template slot="title">分类</template>
                  <el-menu-item index="/category">分类列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <!-- 物品管理一级菜单 -->
              <el-submenu index="1-2">
                <template slot="title">
                  <i class="el-icon-menu"></i>物品管理
                </template>
                <!-- 物品管理二级菜单 -->
                <el-menu-item-group>
                  <template slot="title">物品</template>
                  <el-menu-item index="/item">物品列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <!-- 角色管理一级菜单 -->
              <el-submenu index="1-3">
                <template slot="title">
                  <i class="el-icon-s-help"></i>角色管理
                </template>
                <!--角色管理二级菜单 -->
                <el-menu-item-group>
                  <template slot="title">角色</template>
                  <el-menu-item :index="$route.path"
                                v-if="$route.path==='/hero/create'||$route.path.indexOf('/hero/edit')!==-1">{{AddOrEdit}}</el-menu-item>
                  <el-menu-item index="/hero/list">角色列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <!-- 活动管理 -->
              <el-submenu index="1-4">
                <template slot="title">
                  <i class="el-icon-document"></i>活动管理
                </template>
                <!--活动管理二级菜单 -->
                <el-menu-item-group>
                  <template slot="title">活动</template>
                  <el-menu-item :index="$route.path"
                                v-if="$route.path==='/activity/create'||$route.path.indexOf('/activity/edit')!==-1">{{AddOrEdit}}</el-menu-item>
                  <el-menu-item index="/activity/list">活动列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <!-- 文章管理 -->
              <el-submenu index="1-5">
                <template slot="title">
                  <i class="el-icon-document"></i>文章管理
                </template>
                <!--文章管理二级菜单 -->
                <el-menu-item-group>
                  <template slot="title">文章</template>
                  <el-menu-item :index="$route.path"
                                v-if="$route.path==='/article/create'||$route.path.indexOf('/article/edit')!==-1">{{AddOrEdit}}</el-menu-item>
                  <el-menu-item index="/article/list">文章列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <!-- 广告位管理 -->
              <el-submenu index="1-6">
                <template slot="title">
                  <i class="el-icon-s-opportunity"></i>广告位管理
                </template>
                <!--文章管理二级菜单 -->
                <el-menu-item-group>
                  <template slot="title">广告位</template>
                  <el-menu-item index="/ad/list">广告位列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>
          <!-- 社区管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-office-building"></i>社区管理
            </template>
            <el-menu-item-group>
              <!-- 玩家管理一级菜单 -->
              <el-submenu index="2-1">
                <template slot="title">
                  <i class="el-icon-mobile"></i>玩家管理
                </template>
                <!-- 玩家管理二级菜单 -->
                <el-menu-item-group>
                  <template slot="title">玩家</template>
                  <el-menu-item index="/player/list">玩家列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <!-- 工单管理一级菜单 -->
              <el-submenu index="2-2">
                <template slot="title">
                  <i class="el-icon-document-delete"></i>工单管理
                </template>
                <!--工单管理二级菜单 -->
                <el-menu-item-group>
                  <template slot="title">工单</template>
                  <el-menu-item index="/workOrder/list">工单列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>
          <!-- 用户管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user"></i>用户管理
            </template>
            <!--用户管理二级菜单 -->
            <el-menu-item-group>
              <template slot="title">用户</template>
              <el-menu-item index="/admin_user/list">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {}
  },
  computed: {
    activePath() {
      return this.$route.path
    },
    AddOrEdit() {
      if (this.$route.path.indexOf('/hero') !== -1) {
        if (this.$route.path === '/hero/create') {
          return '添加角色'
        } else if (this.$route.path.indexOf('/hero/edit') !== -1) {
          return '编辑角色'
        }
      } else if (this.$route.path.indexOf('/article') !== -1) {
        if (this.$route.path === '/article/create') {
          return '添加文章'
        } else if (this.$route.path.indexOf('/article/edit') !== -1) {
          return '编辑文章'
        }
      } else {
        if (this.$route.path === '/activity/create') {
          return '添加活动'
        } else if (this.$route.path.indexOf('/activity/edit') !== -1) {
          return '编辑活动'
        }
      }
    },
  },
  methods: {
    // 退出登陆
    loginOut() {
      this.$confirm('是否退出当前账户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        window.localStorage.clear()
        this.$router.push('/login')
      })
    },
  },
}
</script>

<style scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#11131f, #252a40);
  color: #eee;
}
.logo-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>