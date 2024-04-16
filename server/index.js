const express = require('express')
const cors = require('cors')
const app = express()
const port = 3500

const taskRoute = require('./routes/taskRoutes')

app.use(express.json())
app.use(cors())
app.use('/', taskRoute)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
