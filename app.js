const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('We are oh so healthy you cant BEElieve it!')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
