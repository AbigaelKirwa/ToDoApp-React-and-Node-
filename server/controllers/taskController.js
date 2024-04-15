var tasks = ["Fold Laundry", "Sweep house"]

exports.create = (req, res)=>{
    var task = req.body.name
    tasks.push(task)
    res.send(`these are pending tasks: ${tasks}`)
    console.log(tasks)
}