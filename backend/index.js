import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './src/config/db.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
}
)

connectDB()

app.listen(PORT , ()=>{
    console.log(`server running on ${PORT}`);
    
})