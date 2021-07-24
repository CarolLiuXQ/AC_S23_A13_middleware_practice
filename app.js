const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
//導入計算時間的函式
const duration = require('./tools/duration')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use((req, res, next) => {
  duration(req, res, next)
})

//把router全部放一起這樣比較能一次看
app.get('/', function (req, res) {
  res.render('index')
})

app.get('/new', function (req, res) {
  res.render('new')
})

app.get('/:id', function (req, res) {
  res.render('todo')
})

app.post('/', function (req, res) {
  res.send('新增一筆  Todo 了')
})


app.listen(port, () => {
  console.log(`App running on port ${port}`)
})