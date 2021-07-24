const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

app.get('/', (req, res) => {
  res.render('index')
  // res.send('列出全部 Todo')
})


app.get('/new', (req, res) => {
  // res.send('新增 Todo 頁面')
  res.render('new')
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo 了')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})