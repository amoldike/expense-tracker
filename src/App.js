import { useState } from "react";
import "./App.css";
import Expenses from "./Component/Expenses/Expenses";
import NewExpense from "./Component/NewExpense/NewExpense";

const dummyData = [
  {
    id: "exp1",
    date: new Date(2021, 4, 23),
    item: "New TV",
    price: 599.25,
  },
  {
    id: "exp2",
    date: new Date(2021, 3, 16),
    item: "Car Insuranse",
    price: 295.62,
  },
  {
    id: "exp3",
    date: new Date(2021, 2, 18),
    item: "New Desk (Wooden)",
    price: 450.38,
  },
  {
    id: "exp4",
    date: new Date(2022, 5, 18),
    item: "New Laptop",
    price: 250.38,
  },
];

function App() {
  const [expenseData, setExpenseData] = useState(dummyData);

  const getNewExpenseRecord = (data) => {
    console.log("printed from app.js");
    console.log(data);

    setExpenseData((prev) => [data, ...prev]);
  };

  return (
    <div>
      <NewExpense readExpenseData={getNewExpenseRecord} />
      <Expenses expenseData={expenseData} />
    </div>
  );
}

export default App;
