const fsLibrary = require('fs')

function duration(req, res, next) {
  // every time the app receives a request
  const startTimeMs = Date.now()
  const startTime = new Date(startTimeMs)
  // res.on('finish') is called once the data has been sent, so the payload doesn't necessarily exist on the server any more.
  res.on('finish', () => {
    const endTime = Date.now()
    const log = `${startTime.toLocaleString('zh-TW', { hour12: false })} | ${req.method} from ${req.originalUrl} | total time: ${endTime - startTime}ms\r\n`
    fsLibrary.appendFile('./logs/logs.txt', log, (error) => {
      if (error) throw err
    })
  })
  next()
}

module.exports = duration