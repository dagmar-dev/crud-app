const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require(body - parser)

const app = express()
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080
//log request
app.use(morgan('tiny'))
//parse request to body-parser
app.use(bodyparser.urlencoded({ extend: true }))
//set view engine
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.send('Crud Application')
})

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT} `)
)
