// controllers/income.js
import incomeSchema from "../models/incomeModel.js";
const addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = incomeSchema({
    title,
    amount,
    category,
    discription: description,
    date,
  });
  try {
    //validation
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount <= 0 || amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }
    await income.save();
    return res.status(200).json({ message: "Income Added" });
  } catch (error) {
    console.error("Error while adding income:", error);
    if (!res.headersSent) {
      return res
        .status(500)
        .json({ message: "An error occurred while adding income" });
    }
  
  }
};
export const getIncomes = async (req, res) =>{
  try{
    const income = await incomeSchema.find().sort({createdAt: -1})
    res.status(200).json(income)
  } catch(error){
    res.status(500).json({messsage: 'Server Error'})
  }
}
  export const deleteIncome = async (req, res) =>{
      const {id} = req.params;
      console.log(params)
      incomeSchema.findByIdAndDelete(id)
        .then((income)=>{
          res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
          res.status(500).json({message: 'Server Error'})
        })
    }

export default addIncome;
