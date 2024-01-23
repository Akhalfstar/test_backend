import express  from 'express'
const app = express()
// require('dotenv').config()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login' , (req , res ) => {
    res.send("user gets login")
})

app.post('./register' , (req , res) => {
    res.send("user register sucessfully")
})

app.get('/hi' , (req , res) =>{
    const hi = [{1 :"hi aman"} , {2 : "hi janvi"} , {3 : "hi everyone"}]
    res.send(hi)
})

app.get('/getelement' ,(req , res) =>{
    res.send("<h1>hi this is Aman katiyar</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})