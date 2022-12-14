const express=require('express')
const path=require('path')
const app=express()

// middleware
app.use(express.static(path.resolve(__dirname,'./public')))
app.get('/',(req, res) => {
  res.sendFile(path.resolve(__dirname,'\index.html'))
  console.log(__dirname);
})

app.use('*',(req, res) => res.send('<h1>resource not found</h1>'))

app.listen(5000,()=>console.log("server is running"))