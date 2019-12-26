const express = require('express')
const app = express()
const port = port.env.PORT || 4000

app.get('/', (req, res) => res.sendFile(__dirname + 'being-zero2/public/htmls/page1.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))