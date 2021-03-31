module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')

  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')
  // const Hero = mongoose.model('Hero')
  // const Item = mongoose.model('Item')
  // const Strategy = mongoose.model('Strategy')

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
/*  router.get('/news/init', async (req, res) => {
    const parent = await Category.find().where({ name: '新闻资讯' }).lean()
    const cats = await Category.find().where({ parent: parent }).lean()
    const data = [{ "title": "DNFxM·A·C魅可限定开售！男团助你释放无限引力", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=453406", "date": "04/21" }, { "title": "周一惊喜！老亚瑟答疑带来貂蝉仲夏夜之梦优化消息！", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=453311", "date": "04/20" }, { "title": "体验服爆料丨父子相聚，蒙恬将军带着玄雍军阵登场", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=452757", "date": "04/18" }, { "title": "探秘瑶·新皮肤诞生地，敦煌动画正在上映", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=452639", "date": "04/17" }, { "title": "星元部件爆料丨换上新装闪耀舞台，偶像歌手化身魔法少女", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=452545", "date": "04/16" }, { "title": "4月22日全服不停机更新公告", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=453529", "date": "04/22" }, { "title": "4月23日抢先服不停机优化公告", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=453742", "date": "04/23" }, { "title": "4月22日净化游戏环境声明及处罚公告", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=453605", "date": "04/22" }, { "title": "4月22日“演员”惩罚名单", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=453606", "date": "04/22" }, { "title": "4月22日外挂专项打击公告", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=453610", "date": "04/22" }, { "title": "五五开黑节福利抢先看，王昭君-偶像歌手星元上新", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=453393", "date": "04/21" }, { "title": "魔法球更新公告", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=453382", "date": "04/21" }, { "title": "充值1元即可开启暖春七日登录好礼", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=452393", "date": "04/16" }, { "title": "天魔缭乱限时返场 多重好礼等你来领", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=451925", "date": "04/13" }, { "title": "橘右京全新史诗皮肤上架 SNK皮肤齐聚峡谷福利大放送", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=450792", "date": "04/07" }, { "title": "【KPL今日预报】广州TTG.XQ vs TS，谁能拿下关键一分？", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=453656", "date": "04/23" }, { "title": "关于责成TS俱乐部就欠薪问题进行说明的通知", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=451887", "date": "04/13" }, { "title": "《一招即浪》第二期：逆天牛魔王最浪打法，城市赛教你一招制敌", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=451060", "date": "04/09" }, { "title": "为战队争夺荣誉！城市联赛战队赛通道报名开启！", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=450775", "date": "04/07" }, { "title": "高校联赛分站赛即将打响 今年又有多少好玩的活动值得期待？", "url": "https://pvp.qq.com/m/m201606/newCont.shtml?newCont.shtml?G_Biz=18&tid=450343", "date": "04/05" }]
    const newsList = data.map(news => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        title: news.title,
        url: news.url,
        date: news.date,
        cate: randomCats.slice(0, 2)
      }
    })
    await Article.deleteMany({})
    await Article.insertMany(newsList)
    res.send(newsList)
  }) */
}