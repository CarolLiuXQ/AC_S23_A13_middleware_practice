const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//導入計算時間的函式
const duration = require('./tools/duration')

app.use((req, res, next) => {
  duration(req, res, next)
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