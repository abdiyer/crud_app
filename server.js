const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path/posix')

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//logg reqs
app.use(morgan('tiny'))

//parse req to bodyparser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set('view engine',"ejs")

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/js')))

app.get('/',(req,res)=>{
    res.render('index')
})



app.listen(3000, ()=>console.log(`server is running on ${PORT}`))