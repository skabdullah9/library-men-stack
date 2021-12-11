if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.once('open', () => console.log('connected to mongo'))
app.use('/', indexRouter)
app.listen(process.env.PORT || 5000, () => console.log('server up and runnin'))