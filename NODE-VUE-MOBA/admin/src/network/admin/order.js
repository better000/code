import { GUID_req, upload } from '../request'

//新建
function createOrder(data) {
  return GUID_req({
    url: '/orders',
    method: 'post',
    data
  })
}

//根据id查找(读取)
function getOrder(orderId) {
  return GUID_req({
    url: `/orders/${orderId}`
  })
}

//编辑提交
function updateOrder(orderId, data) {
  return GUID_req({
    url: `/orders/${orderId}`,
    method: 'put',
    data
  })
}

//删除
function deleteOrder(orderId) {
  return GUID_req({
    url: `/orders/${orderId}`,
    method: 'delete'
  })
}

//获取列表
function getOrderList(params) {
  return GUID_req({
    url: '/orders',
    params
  })
}
export {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getOrderList
}