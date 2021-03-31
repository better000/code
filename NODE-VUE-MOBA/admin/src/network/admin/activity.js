import { GUID_req } from '../request'

//新建分类
function createActivity(data) {
  return GUID_req({
    url: '/Activities',
    method: 'post',
    data
  })
}

//根据id查找分类(读取)
function getActivity(itemId) {
  return GUID_req({
    url: `/Activities/${itemId}`
  })
}

//编辑提交分类
function updateActivity(itemId, data) {
  return GUID_req({
    url: `/Activities/${itemId}`,
    method: 'put',
    data
  })
}

//删除分类
function deleteActivity(itemId) {
  return GUID_req({
    url: `/Activities/${itemId}`,
    method: 'delete'
  })
}

//获取分类列表
function getActivityList(params) {
  return GUID_req({
    url: '/Activities',
    params
  })
}

export {
  createActivity,
  getActivity,
  updateActivity,
  deleteActivity,
  getActivityList
}