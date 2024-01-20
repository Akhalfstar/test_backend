const express = require('express')
const app = express()
require('dotenv').config()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login' , (req , res ) => {
    res.send("user gets login")
})

app.post('./register' , (req , res) => {
    res.send("user register sucessfully")
})

app.get('/getelement' ,(req , res) =>{
    res.send("<h1>hi this is Aman katiyar</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})