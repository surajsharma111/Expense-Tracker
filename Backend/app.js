import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import db from './db/db.js';
import router from './routes/transjaction.js';
import addIncome from './controllers/income.js';
const app = express();


dotenv.config();
const PORT = process.env.PORT || 3500;

// Middleware

app.use(express.json());
app.use(cors());


//routes

app.use('/transaction', router); // Use the transaction router
app.use('/add-income',addIncome )


app.get('/', (req, res)=>{
    res.send('Hello world');
}
    
)


const server = () =>{
app.listen(PORT , () =>{
    console.log('listening to the port:', PORT)
    db();
})

}
server();