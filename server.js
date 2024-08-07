require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 5050


const apiRouter = express.Router();


apiRouter.get('/api', (req, res)=>{
    try {
        return res.status(200).json({message:'CICD API WORKING'})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})


app.use('/cicd', apiRouter);

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})