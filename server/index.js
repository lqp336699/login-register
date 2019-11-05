import express from 'express';
import users from './routes/users';
import bodyParser from 'body-Parser'

const app = express();

app.use(bodyParser.json());

app.use('/api/users',users)

app.get('/api',(req,res)=>{
    res.send('hello world');
})


app.listen(5050,()=>{
    console.log("server is running on the 5050")
})