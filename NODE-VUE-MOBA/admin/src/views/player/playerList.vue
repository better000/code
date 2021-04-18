<template>
  <div>
    <Breadcrumb text="玩家列表" />

    <el-card>
      <el-row>
        <el-col :span="3">
          <el-button type="primary" icon="el-icon-plus" @click="addplayer">添加玩家</el-button>
        </el-col>
        <el-col :span="3" >
          <download-excel
            :fetch= "fetchData"
            :fields = "json_fields"
            name = "申报工单.xls">
            <el-button type="primary" icon="el-icon-printer">导出玩家名单</el-button>
          </download-excel>
        </el-col>
      </el-row>

      <el-table :data="playerList" border stripe>
        <el-table-column label="玩家用户名" prop="username"></el-table-column>
        <el-table-column label="玩家信用" prop="credit">
           <template slot-scope="scope">
            <el-tag v-if="+scope.row.credit === 1" type="danger">黑名单</el-tag>
            <el-tag v-if="+scope.row.credit === 0" type="success">信用高</el-tag>
            <span v-else></span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" type="primary" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              icon="el-icon-delete"
              @click="_delete(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog
      :title="!this.model._id?'添加玩家':'编辑玩家'"
      :visible.sync="dialogVisible"
      width="50%"
      @closed="dialogClose"
    >
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="玩家信用">
          <template>
            <el-radio v-model="model.credit" :label="0">信用高</el-radio>
            <el-radio v-model="model.credit" :label="1">黑名单</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
 
<script>
import Breadcrumb from '../../components/commom/Breadcrumb'

//导入网络请求函数
import { createplayer, getplayer, updateplayer, deleteplayer, getplayerList } from 'network/admin/player'

export default {
  name: "PlayerList",
  data() {
    return {
      //分类列表数据
      playerList: [],
      //数据
      model: {},
      dialogVisible: false,
      json_fields: {
        玩家用户名: 'username',
        玩家信用: 'credit'
      }
    }
  },
  components: {
    Breadcrumb
  },
  methods: {
    //请求玩家列表数据
    async getplayerList() {
      const res = await getplayerList()
      this.playerList = res.data
    },
    addplayer() {
      this.dialogVisible = true
    },
    //监听编辑玩家按钮
    async edit(row) {
      this.id = row._id
      const res = await getplayer(this.id)
      this.model = res.data
      this.dialogVisible = true
    },
    async ok() {
      if (!this.model._id) {
        const res = await createplayer(this.model)
        if (!res) return
        this.$message.success('创建玩家成功')
        this.getplayerList()
        this.dialogVisible = false
      } else {
        const res = await updateplayer(this.id, this.model)
        if (!res) return
        this.$message.success('编辑玩家成功')
        this.getplayerList()
        this.dialogVisible = false
      }
    },
    //监听删除玩家
    async _delete(row) {
      try {

        await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })

        const res = await deleteplayer(row._id)
        this.$message.success(res.data.message)
        this.getplayerList()

      } catch (error) {
        this.$message.info('已取消删除')
      }

    },
    dialogClose() {
      this.model = {}
    },
    // 玩家名单导出
    fetchData () {
      const excelList = this.playerList
      excelList.forEach(function (item) {
        item.credit = +item.credit === 1 ? '黑名单' : '信用高'
      })
      this.getplayerList()
      return excelList
    }
  },
  created() {
    this.getplayerList()
  }
}
</script>
 
<style scoped>
</style>