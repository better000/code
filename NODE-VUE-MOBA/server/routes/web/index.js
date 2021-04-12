module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')

  const Ad = mongoose.model('Ad')
  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')
  const Hero = mongoose.model('Hero')
  const Activity = mongoose.model('Activity')
  const Player = mongoose.model('Player')
  //const Item = mongoose.model('Item')

  app.use('/web/api', router)

  //轮播图接口
  router.get('/ads', async (req, res) => {
    const model = await Ad.find()
    res.send(model)
  })

  //新闻数据接口
  router.get('/news', async (req, res) => {

    //普通populate查询>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // const parent = await Category.findOne({
    //   name: '新闻资讯'
    // }).populate({
    //   path: 'children',
    //   populate: {
    //     path: 'news_list'
    //   }
    // }).lean()

    //聚合查询>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const parent = await Category.findOne({ name: '新闻资讯' })
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'cate',
          as: 'news_list'
        }
      },
      {
        $addFields: {
          news_list: { $slice: ['$news_list', 6] }
        }
      }
    ])
    subCates = cats.map(item => {
      return item._id
    })
    // 在最前面插入综合分类
    cats.unshift({
      name: '综合',
      news_list: await Article.find().populate('cate').where({
        cate: { $in: subCates }
      }).limit(6).lean()
    })
    //判断分类是否为综合，如果为综合，则直接取该分类名
    cats.map(cat => {
      cat.news_list.map(news => {
        news.cate_name = cat.name === '综合' ? news.cate[0].name : cat.name
        return news
      })
      return cat
    })
    res.send(cats)
  })

  //活动数据接口
  router.get('/activite', async (req, res) => {
    //聚合查询>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const parent = await Category.findOne({ name: '活动中心' })
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'activities',
          localField: '_id',
          foreignField: 'cate',
          as: 'activite_list'
        }
      }
    ])
    subCates = cats.map(item => {
      return item._id
    })
    // 在最前面插入热门推荐分类
    cats.unshift({
      name: '热门推荐',
      activite_list: await Activity.find().populate('cate').where({
        cate: { $in: subCates }
      }).limit(8).lean()
    })
    //判断分类是否为热门推荐，如果为热门推荐，则直接取该分类名
    cats.map(cat => {
      cat.activite_list.map(activites => {
        activites.cate_name = cat.name === '热门推荐' ? activites.cate[0].name : cat.name
        return activites
      })
       return cat
    })
    res.send(cats)
  })

  // 角色列表数据请求接口
  router.get('/heros', async (req, res) => {
    // const cates = await Category.findOne({
    //   name: '角色列表'
    // }).populate({
    //   path: 'children'
    // }).lean()

    const parent = await Category.findOne({ name: '角色列表' })
    const cates = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'heros',
          localField: '_id',
          foreignField: 'cate',
          as: 'hero_list'
        }
      }
    ])
    // const subCates = cates.map(cate => cate._id)
    // cates.unshift({
    //   name: '综合',
    //   hero_list: await Hero.find().where({
    //     cate: { $in: subCates }
    //   }).limit(10).lean()
    // })
    res.send(cates)
  })

  //根据id获取文章详情
/*   router.get('/article/:id', async (req, res) => {
    const model = await Article.findById(req.params.id).lean()
    model.related = await Article.find().where({
      cate: { $in: model.cate }
    }).skip(1).limit(2)
    res.send(model)
  }) */
  router.get('/articles/:id', async (req, res) => {
    const data = await Article.findById(req.params.id)
    res.send(data)
  })

  // 根据id获取单个角色数据
  router.get('/hero/:id', async (req, res) => {
    res.send(await Hero.findById(req.params.id).populate('cate downWind.equipment upWind.equipment partners.hero restrained.hero restraint.hero'))
  })

  // 根据id获取玩家信息
  router.get('/player/:id', async (req, res) => {
    const data = await Player.findById(req.params.id)
    res.send(data)
  })

  // 编辑玩家信息
  router.put('/player/:id', async (req, res) => {
    const model = await Player.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 创建申报信息
  router.post('/orders', async (req, res) => {
    try {
      const model = await Player.create(req.body)
      res.send(model)
    } catch (error) {
      res.status(400).send({ message: '传入的参数有误' })
    }
  })
}