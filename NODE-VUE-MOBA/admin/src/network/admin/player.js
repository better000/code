import { GUID_req } from '../request'

//新建玩家
function createplayer(data) {
  return GUID_req({
    url: '/players',
    method: 'post',
    data
  })
}

//根据id查找玩家(读取)
function getplayer(itemId) {
  return GUID_req({
    url: `/players/${itemId}`
  })
}

//编辑提交玩家
function updateplayer(itemId, data) {
  return GUID_req({
    url: `/players/${itemId}`,
    method: 'put',
    data
  })
}

//删除玩家
function deleteplayer(itemId) {
  return GUID_req({
    url: `/players/${itemId}`,
    method: 'delete'
  })
}

//获取玩家列表
function getplayerList() {
  return GUID_req({
    url: '/players'
  })
}

export {
  createplayer,
  getplayer,
  updateplayer,
  deleteplayer,
  getplayerList
}