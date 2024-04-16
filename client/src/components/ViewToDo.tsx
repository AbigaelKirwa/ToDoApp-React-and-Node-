import React, { useEffect, useState } from 'react'
import { APIType, Task } from '../@types/types'
import { Box, Button, Checkbox, Chip, Typography, Modal, TextField } from '@mui/material'

const ViewToDo: React.FC<APIType> = ({API_URL}) => {

    const [tasks, setTasks] = useState<Task[]>([])
    const [title, setTitle] = useState<string>("")
    const [priority, setPriority] = useState<number>(1)
    const currentDate = new Date().toDateString()

    // fetching data
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch(API_URL)
                const data = await response.json()
                setTasks(data)
            }
            catch(e){
                console.log(e)
            }
        }
        fetchData()
    },[API_URL])

    //deleting data
    const handleDelete = async(id:number)=>{
        try{
            const deleteOption = {method: 'DELETE'}
            const reqUrl = `${API_URL}/${id}`
            const result = await fetch(reqUrl, deleteOption)
            const data = await result.json()
            setTasks(data)
        }
        catch(e){
            console.log(e)
        }
    }

    //creating data
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        px:5,
        py: 10,
    };

    const handleCreate = async(e:any) =>{
        const newTask = {id:(tasks.length+1), title:title, priority:priority, createdAt:currentDate, done:false, doneAt:"not Done"}
        console.log(newTask)
        console.log(JSON.stringify(newTask))
        try{
            e.preventDefault()
            const createOption = {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(newTask)
            }
            const response = await fetch(API_URL, createOption)
            const data = await response.json()
            setTasks(data)
            setOpen(false)
        }
        catch(e){
            console.log(e)
        }
    }
      

    return (
        <div>
            {tasks.map((task)=>(
                task && (
                <Box key={task.id} display={'flex'} gap={3} pt={5}>
                    <Typography fontWeight={700}>Task {task.id}</Typography>
                    <Typography>{task.title}</Typography>
                    {
                    task.priority === 1 ? <Chip label="Urgent" sx={{backgroundColor:"#FF6A06", color:"#fff", width:"80px"}}/>:
                    task.priority === 2 ? <Chip label="Medium" sx={{backgroundColor:"#007A00", color:"#fff", width:"80px"}}/>:
                    <Chip label="Minor" sx={{backgroundColor:"#808080", color:"#fff", width:"80px"}}/>
                    }
                    <Typography>{task.createdAt}</Typography>
                    {task.done === true ? <Checkbox defaultChecked sx={{mt:-1}}/> : <Checkbox sx={{mt:-1}}/>}
                    <Typography>{task.doneAt}</Typography>
                    <Box display="flex" justifyContent="flex-end" flexGrow={1} gap={5}>
                        <Button variant='contained'>Edit</Button>
                        <Button variant='contained' style={{backgroundColor:"#C30010"}} onClick={()=>{handleDelete(task.id)}}>Delete</Button>
                    </Box>
                </Box>
                )
            ))}
            <Button variant='contained' sx={{mt:5, py:2, px:4,backgroundColor:"#111111"}} onClick={handleOpen}>Create a new Task</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
                <Typography id="modal-modal-title" variant="h4" component="h2" textAlign={'center'} pb={5}>Create a Task</Typography>
                <form action="post" onSubmit={handleCreate} style={{paddingTop:"10px", display:"flex", flexDirection:"column", gap:"20px"}}>
                    <TextField id="outlined-basic" value={title} onChange={(e)=>{setTitle(e.target.value)}} label="Title" variant="outlined" />
                    <TextField id="outlined-basic" type="number" value={priority} onChange={(e)=>{setPriority(parseInt(e.target.value))}} label="Priority" variant="outlined" />
                    <Button variant='contained' type='submit'>Submit</Button>
                </form>
                </Box>
            </Modal>
        </div>
    )
}

export default ViewToDo