var tasks = [
    {id:1, title:"Sweeping", priority:1, createdAt:"Monday 10.59", done:true, doneAt:"Tuesday 11.59"},
    {id:2, title:"Mopping", priority:2, createdAt:"Tuesday 01.00", done:false, doneAt:"Wednesday 02.00"},
    {id:3, title:"Cooking", priority:3, createdAt:"Wednesday 03.00", done:false, doneAt:"Friday 02.00"}
]

exports.create = (req, res)=>{
    var task = req.body.name
    tasks.push(task)
    res.send(tasks)
}

exports.read = (req, res)=>{
    res.send(tasks)
}

exports.update = (req, res)=>{
    var {id} = req.params 
    var task = req.body.name
    tasks[id] = task
    res.send(tasks)
}

exports.delete = (req, res)=>{
    var {id} = req.params
    tasks.splice(id, 1)
    res.send(tasks)
}