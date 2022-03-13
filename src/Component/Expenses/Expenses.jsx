import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const updateFilteredYear = (year) => {
    console.log("inside expenses");
    console.log(year);

    setFilteredYear(year);
  };

  let filteredRecords = expenseData.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear.toString();
  });

  // console.log(filteredRecords);

  return (
    <div className="expenses">
      <ExpensesFilter
        updateFilteredYear={updateFilteredYear}
        filteredYear={filteredYear}
      />
      <ExpenseChart filteredRecords={filteredRecords} />
      <ExpensesList filteredRecords={filteredRecords} />
    </div>
  );
};

export default Expenses;
