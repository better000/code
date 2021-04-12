const Player = require('../../models/Player')

module.exports = app => {
  const express = require('express')
  const router = express.Router()

  app.post('/web/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户,校验密码
    const Player = require('../../models/Player')
    const user = await Player.findOne({username, password})
    if (!user) {
      return res.status(422).send({
        message: '用户名或密码错误'
      })
    }
    // 2.返回token
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({ id: user._id}, app.get('secret'))
    const id = user._id
    res.send({token, id})
  })

  app.post('/web/api/register', async (req, res) => {
    const { newUsername, newPassword, renewPassword, credit } = req.body
    if (newUsername == '') {
      return res.status(422).send({
        message: '用户名不能为空'
      })
    }
    if (newPassword == '') {
      return res.status(422).send({
        message: '密码不能为空'
      })
    }
    if (newPassword != renewPassword) {
      return res.status(422).send({
        message: '两次输入的密码不一致'
      })
    }
    // 用户名没有被注册则将用户保存在数据库中
    const user = await Player.findOne({username: newUsername})
    if (!user) {
      try {
        const model = await Player.create({
          username: newUsername,
          password: newPassword,
          credit: credit
        })
        res.send(model)
      } catch (error) {
        res.status(400).send({ message: '传入的参数有误' })
      }
    } else {
      return res.status(400).send({
        message: '该用户已存在'
      })
    }
  })
}