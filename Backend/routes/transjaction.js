import express from 'express'
const router = express.Router()
import  addIncome  from '../controllers/income.js';
 
router.post('/add-income', addIncome)
export default router;