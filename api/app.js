var express = require("express")
var api = express()
const PORT = 5500

api.listen(PORT,()=>{
    console.log('Listening in port: ', PORT)
})

api.get("/",async(req, res) =>{
    res.send("<strong>HOME PAGE</strong>")
})

api.get("/time", async(req, res) => {
    res.send(new Date())
})