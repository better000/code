module.exports = (app, multer) => {
  const express = require('express')
  const router = express.Router()

  app.use('/web/api/upload', router)

  // 材料上传
  const upload = multer({ dest: __dirname + '/../../uploads/materials' })
  router.post('/material', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3333/uploads/materials/${file.filename}`
    res.send(file)
  })

}