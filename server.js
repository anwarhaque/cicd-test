require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/api', (req, res)=>{
    try {
        return res.status(200).json({message:'api working'})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})