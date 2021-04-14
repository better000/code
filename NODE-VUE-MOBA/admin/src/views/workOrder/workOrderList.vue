<template>
  <div>
    <breadcrumb text="工单列表" />
    <el-card>
      <el-table :data="orderList" stripe border>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="类型" prop="type"></el-table-column>
        <el-table-column label="申请人" prop="applicant.username"></el-table-column>
        <el-table-column label="申报内容" width="400px" prop="feedback"></el-table-column>
        <el-table-column label="状态" prop="status">
          <template slot-scope="scope">
            <el-tag v-if="+scope.row.status === 0" type="danger">未处理</el-tag>
            <el-tag v-if="+scope.row.status === 1" type="success">已处理</el-tag>
            <span v-else></span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" type="primary" icon="el-icon-edit" @click="edit(scope.row)">处理</el-button>
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
    <!-- 处理工单对话框 -->
    <el-dialog title="工单处理" :visible.sync="editDialogVisible" width="40%">
      <el-form label-width="80px">
        <el-form-item label="工单类型:">
          <span>{{model.type}}</span>
        </el-form-item>
        <el-form-item label="申请人:">
          <span>{{applicant.username}}</span>
        </el-form-item>
        <el-form-item label="工单状态:">
          <span>{{model.status === 0 ? '未处理' : '已处理'}}</span>
        </el-form-item>
        <el-form-item label="申报内容:">
          <span>{{model.feedback}}</span>
        </el-form-item>
        <el-form-item label="证明材料:">
          <el-image 
            style="width: 100px; height: 100px"
            :src="model.material">
          </el-image>
        </el-form-item>
        <el-form-item label="处理说明:">
          <el-input v-if="model.status === 0" v-model="model.handle"></el-input>
          <span v-if="model.status === 1">{{model.handle}}</span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="okEdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
 
<script>

import Breadcrumb from '../../components/commom/Breadcrumb'
//导入网络请求函数
import { deleteOrder, getOrderList, getOrder, updateOrder } from 'network/admin/order'

export default {
  name: "OrderList",
  data() {
    return {
      //工单列表数据
      orderList: [],
      pageParams: {
        pagenum: 1,
        pagesize: 5
      },
      total: 0,
      model: '',
      applicant: '',
      id: '',
      status: 1,
      editDialogVisible: false
    }
  },
  components: {
    Breadcrumb
  },
  methods: {
    //请求工单列表数据
    async getOrderList() {
      const res = await getOrderList(this.pageParams)
      this.total = res.data.total
      this.orderList = res.data.data
    },
    //监听编辑工单按钮
    async edit(row) {
      this.id = row._id
      const res = await getOrder(this.id)
      this.model = res.data
      this.applicant = this.model.applicant
      this.editDialogVisible = true
    },
    //提交处理
    async okEdit() {
      var params = {
        applicant: this.model.applicant,
        feedback: this.model.feedback,
        handle: this.model.handle,
        material: this.model.material,
        type: this.model.type,
        status: 1
      }
      const res = await updateOrder(this.id, params)
      if (!res) return 
      this.$message.success('处理完成')
      this.getOrderList()
      this.editDialogVisible = false
    },
    //监听删除工单按钮
    async _delete(row) {
      try {

        await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })

        const res = await deleteOrder(row._id)
        if(!res) return
        this.$message.success('删除成功')
        this.getOrderList()

      } catch (error) {
        this.$message.info('已取消删除')
      }

    },
    handleSizeChange(pagesize) {
      this.pageParams.pagesize = pagesize
      this.getOrderList()
    },
    handleCurrentChange(pagenum) {
      this.pageParams.pagenum = pagenum
      this.getOrderList()
    }
  },
  async created() {
    this.getOrderList()
    const res = await getOrderList()
  }
}
</script>
 
<style scoped>
</style>