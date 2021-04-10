module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')

  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')


  app.use('/web/api', router)

  //插入新闻数据>>>>>>>>>>>>>>>>>>>>>>
  router.get('/news/init', async (req, res) => {
    const parent = await Category.find().where({ name: '新闻资讯' }).lean()
    const cats = await Category.find().where({ parent: parent }).lean()
    const newsTitles = ["3月12日 9点进行不停机更新公告", "关于文创周边装扮套装礼盒显示过期相关公告", "关于副本初始化时间调整的说明", "3月11日 早5点停机更新公告", "3月4日 早5点停机更新公告", "关于部分职业冥光天羽胸部装扮属性失效说明", "关于女神枪手三次觉醒挑战活动说明", "像素勇士大创造 赢取+10增幅券与增幅保护券！", "比比的飞镖大挑战 得时间引导石与Lv100史诗袖珍罐！", "DNF优享礼遇特权 账号共享只需4900点券", "吉祥如意粘土礼盒 装扮兑换券仅需666点券", "圣者遗物箱特别更新 快来抽取史诗宝珠", "国潮许愿开启，国风装扮、镜花水月光环限时抢！", "好礼天天见 每天签到就有+7增幅券和纯净黄金书拿！", "新版本回归勇士福利一览，快速跟上版本步伐不是问题!", "永恒大陆特殊奖励不知在哪拿，这份阿拉德探险记攻略请收好", "回归玩家福利多，一文教你拿完回归奖励", "强化、增幅宠物免费送，这个副本的奖励一定不能错过", "无之轨迹使用指南，合理运用征战模式也不在话下", "第五季战令奖励丰厚，这些助你快速完成任务", "雪人套重磅来袭，这些经典趣味搭配你值得拥有", "嗨战冬日，巅峰对决!虎牙大师杯电竞赛火热来袭", "2020DNF嘉年华落地武汉 F1天王赛即将开战", "决战前夕 DNF DPL职业联赛双败对抗赛战果速递", "四强诞生 DNF DPL职业联赛双败淘汰赛战果速递", "群星混战 DNF DPL职业联赛个人车轮战赛果速递", "DNF DPL职业联赛正式开打 首周小组赛上演巅峰对决", "奋起直追 DNF DPL职业联赛组队对抗赛战果速递", "嗨战冬日，巅峰对决!虎牙大师杯电竞赛火热来袭", "2020DNF嘉年华落地武汉 F1天王赛即将开战", "决战前夕 DNF DPL职业联赛双败对抗赛战果速递", "四强诞生 DNF DPL职业联赛双败淘汰赛战果速递", "群星混战 DNF DPL职业联赛个人车轮战赛果速递", "DNF DPL职业联赛正式开打 首周小组赛上演巅峰对决", "奋起直追 DNF DPL职业联赛组队对抗赛战果速递"]
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        cate: randomCats.slice(0, 2),
        title: title
      }
    })
    await Article.deleteMany({})
    await Article.insertMany(newsList)
    res.send(newsList)
  })
}