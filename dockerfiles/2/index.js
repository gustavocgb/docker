const express = require('express')
const cors = require('cors')
let port = 3000

const routes = require('./src/routes/routes')
const app = express()

app.use(express.static('public/frontEnd'))
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(port)

module.exports = {
  app
}



