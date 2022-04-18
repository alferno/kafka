const express = require('express')
const Kafkaa = require('./kafka.js')

const app = express()

app.use(express.urlencoded())
app.use(express.json())

const PORT = 3002

app.use(Kafkaa)

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`)
})
