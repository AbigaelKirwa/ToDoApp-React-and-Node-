const express = require('express')
const app = express()
const port = 3500

const taskRoute = require('./routes/taskRoutes')

app.use(express.json())
app.use('/task', taskRoute)

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
