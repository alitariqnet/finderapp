import express from 'express';

const app = express();
const PORT = 5000;

app.get('/',(req, res)=>{ return res.json({message:"server is ready"})});

app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)});