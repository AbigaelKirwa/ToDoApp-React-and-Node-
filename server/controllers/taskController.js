var tasks = ["Fold Laundry", "Sweep house"]

exports.create = (req, res)=>{
    var task = req.body.name
    tasks.push(task)
    res.send(`these are pending tasks: ${tasks}`)
}

exports.read = (req, res)=>{
    res.send(`these are the pending tasks: ${tasks}`)
}

exports.update = (req, res)=>{
    var {id} = req.params 
    var task = req.body.name
    tasks[id] = task
    res.send(`these are pending tasks: ${tasks}`)
}