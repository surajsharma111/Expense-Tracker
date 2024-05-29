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

export default addIncome;
