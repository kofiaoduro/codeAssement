const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions))

app.get('/', (req, res)=>{
    res.send('redirect to /message')
})  

app.get('/message', (req, res)=>{
    res.json({"message": "Hello World"})
})





app.listen(port, ()=>{
    console.log(`listning to port ${port}`)
})