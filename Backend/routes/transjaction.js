import express from 'express'
import  addIncome  from '../controllers/income.js';
import  getIncomes  from '../controllers/income.js';
import  deleteIncome  from '../controllers/income.js';
const router = express.Router()

 
router.post('/add-income', addIncome)
        .get('/get-income', getIncomes)
        .delete('/delete-income/ : id', deleteIncome)
export default router;