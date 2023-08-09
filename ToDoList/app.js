const express = require('express')
const  mongoose = require('mongoose')
const path = require("path");

const app = express()

// mongodb bağlantısı

const dbURL = 'mongodb+srv://<KullanıcıAdı>:<Password>@deneme.sozdve4.mongodb.net/'
mongoose.connect(dbURL ,{ useNewUrlParser : true , useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

//Middlewares (ara katman)

app.use(express.urlencoded({extended: true}))
app.set ("view engine","ejs")
app.set('views',path.join(__dirname, 'views'))
app.use('/public',express.static('public'))

//routes (yönlendirme)

app.use(require("./routes/index"))
app.use(require("./routes/todo"))

