const express = require("express")
const  app = express()


app.set("view engine",'ejs')
app.use(logger)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('/', (req,res) => {
    console.log("Here")
    // res.sendStatus(500)
    // res.download("server.js")
    res.render('index', {text: "World"})
})

const userRouter = require('./routes/users')
const {text} = require("express");
// const postRouter = require('./routes/posts')
app.use('/users',userRouter)
// app.use('/posts',postRouter)
function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)