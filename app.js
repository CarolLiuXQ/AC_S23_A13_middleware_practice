const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const fsLibrary = require('fs')

app.use(function (req, res, next) {
  const dateTw = new Date()
  const log = `${dateTw.toLocaleString('zh-TW', { hour12: false })} | ${req.method} from ${req.originalUrl}\r\n`
  fsLibrary.appendFile('./logs/logs.txt', log, (error) => {
    if (error) throw err;
  })
  next()
})


app.get('/', function (req, res) {
  res.render('index')
  // res.send('列出全部 Todo')
})


app.get('/new', function (req, res) {
  // res.send('新增 Todo 頁面')
  res.render('new')
})

app.get('/:id', function (req, res) {
  res.send('顯示一筆 Todo')
})

app.post('/', function (req, res) {
  res.send('新增一筆  Todo 了')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})