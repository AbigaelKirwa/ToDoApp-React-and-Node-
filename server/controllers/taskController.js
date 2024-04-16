var tasks = [
    {id:1, title:"Sweeping", priority:1, createdAt:"Mon Apr 15 2024", done:true, doneAt:"Mon Apr 15 2024"},
    {id:2, title:"Mopping", priority:2, createdAt:"Tue Apr 16 2024", done:false, doneAt:"Wed Apr 17 2024"},
    {id:3, title:"Cooking", priority:3, createdAt:"Wed Apr 17 2024", done:false, doneAt:"Friday Apr 19 2024"}
]

exports.create = (req, res)=>{
    var {id, title, priority, createdAt, done, doneAt} = req.body
    tasks.push({id, title, priority, createdAt, done, doneAt})
    res.send(tasks)
    console.log(`added to tasks: ${JSON.stringify(tasks)}`)
}

exports.read = (req, res)=>{
    res.send(tasks)
}

exports.update = (req, res)=>{
    var {id} = req.params 
    const index = tasks.findIndex((task)=>parseInt(task.id) === parseInt(id))
    var {title, priority, createdAt, done, doneAt} = req.body //to be edited
    tasks[index] = {id, title, priority, createdAt, done, doneAt}
    res.send(tasks)
    console.log(`updated tasks: ${JSON.stringify(tasks)}`)
}

exports.delete = (req, res)=>{

    var {id} = req.params
    var index = tasks.findIndex((task)=>parseInt(task.id) === parseInt(id))
    if (index !== -1){
        console.log(`Deleting Task${JSON.stringify(tasks[index])}`)
        tasks.splice(index, 1)
    }
    res.send(tasks)
}