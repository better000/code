<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{id?'编辑':'创建'}}活动</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-form label-width="80px" @submit.native.prevent="save">
        <el-form-item label="所属分类">
          <el-select v-model="model.cate" placeholder="请选择所属分类" clearable multiple>
            <el-option
              v-for="item in cateList"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="model.title"></el-input>
        </el-form-item>
        <el-form-item label="主要奖励">
          <el-select filterable v-model="model.reward" placeholder="请选择活动奖励" multiple>
            <el-option v-for="item in itemList" :key="item._id" :label="item.name" :value="item_id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结束时间">
           <el-input v-model="model.enddate"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
 
<script>
// 导入网络请求函数
import { createActivity, getActivity, updateActivity } from 'network/admin/activity'
import { getCateList } from 'network/admin/category'
import { getItemList } from 'network/admin/item'

export default {
  name: "ActivityEdit",
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      //活动数据
      model: {},
      //分类列表数据
      cateList: [],
      // 物品列表数据
      itemList: ''
    }
  },
  methods: {
    // 保存新建或者编辑的活动
    async save() {
      if (!this.id) {
        console.log(this.model)
        const res = await createActivity(this.model)
        console.log(res)
        if(!res) return
        this.$message.success('创建活动成功')
        this.$router.push('/activity/list')
      } else {
        const res = await updateActivity(this.id, this.model)
        if(!res) return
        this.$message.success('编辑活动成功')
        this.$router.push('/activity/list')
      }
    },
    //处于编辑模式下，通过id查找需要编辑的活动
    async getActivity() {
      const res = await getActivity(this.id)
      this.model = res.data
    },
    //获取分类列表
    async getCateList() {
      const res = await getCateList()
      const data = res.data.find(item => item.name === '活动中心')
      this.cateList = data.children

    },
    //获取物品列表数据
    async getItemList() {
      const res = await getItemList()
      this.itemList = res.data
      console.log(this.itemList);
    }
  },
  created() {
    this.getCateList()
    this.id && this.getActivity()
    this.getItemList()
  }
}
</script>
 
<style scoped>
</style>