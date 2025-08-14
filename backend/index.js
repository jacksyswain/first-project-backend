import express from 'express';


const app = express();
app.get('/',(req,res)=>{
    res.send("surver is ready")
})
app.get('/api/user',(req,res)=>{
    const users=[
        {
            id:1,
            name:"kanha",
            age:30
        },
        {
            id:2,
            name:"lm",
            age:25
        },
        {
            id:3,
            name:"kiran",
            age:25
        },
        {
            id:4,
            name:"vishal",
            age:32
        }
    ];
    res.send(users);
})

const port= process.env.PORT || 3001  ;

app.listen(port,()=>{
    console.log(`server is running at localhost ${port}`)
})