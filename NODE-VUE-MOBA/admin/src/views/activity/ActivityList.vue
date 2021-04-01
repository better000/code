<template>
  <div>
    <breadcrumb text="活动列表" />
    <el-card>
      <el-button type="primary" icon="el-icon-plus" @click="addActivity">添加活动</el-button>
      <el-table :data="activityList" border stripe>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="所属分类">
          <template slot-scope="scope">
            <span>{{scope.row.cate.map(item => item.name).join('/')}}</span>
          </template>
        </el-table-column>
        <el-table-column label="活动名称" prop="title"></el-table-column>
        <el-table-column label="主要奖励">
          <template slot-scope="scope">
            <div v-for="item in scope.row.reward" :key="item._id">
              <img :src="item.icon"/>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="结束时间" prop="enddate"></el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" type="primary" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" icon="el-icon-delete" @click="_delete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageParams.pagenum"
        :page-sizes="[5, 8, 10, 15]"
        :page-size="pageParams.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>
 
<script>

import Breadcrumb from '../../components/commom/Breadcrumb'
//导入网络请求函数
import { deleteActivity, getActivityList } from 'network/admin/activity'

export default {
  name: "ActivityList",
  data() {
    return {
      //活动列表数据
      activityList: [],
      pageParams: {
        pagenum: 1,
        pagesize: 5
      },
      total: 0
    }
  },
  components: {
    Breadcrumb
  },
  methods: {
    //请求活动列表数据
    async getActivityList() {
      const res = await getActivityList(this.pageParams)
      this.total = res.data.total
      this.activityList = res.data.data
      console.log(this.activityList,"sssss")
    },
    //监听编辑活动按钮
    edit(row) {
      this.$router.push(`/activity/edit/${row._id}`)
    },
    //监听删除活动按钮
    async _delete(row) {
      try {
        await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })

        const res = await deleteActivity(row._id)
        if(!res) return
        this.$message.success('删除成功')
        this.getActivityList()

      } catch (error) {
        this.$message.info('已取消删除')
      }

    },
    // 添加活动
    addActivity() {
      this.$router.push('/activity/create')
    },
    handleSizeChange(pagesize) {
      this.pageParams.pagesize = pagesize
      this.getActivityList()
    },
    handleCurrentChange(pagenum) {
      this.pageParams.pagenum = pagenum
      this.getActivityList()
    }
  },
  async created() {
    await this.getActivityList()
    const res = await getActivityList()
    // console.log(res.data);
  }
}
</script>
 
<style scoped>
</style>