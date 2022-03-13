import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let records = (
    <h2 className="expenses-list__fallback" style={{ color: "white" }}>
      No Data Found
    </h2>
  );

  if (props.filteredRecords.length > 0) {
    records = props.filteredRecords.map((row) => {
      return <ExpenseItem key={row.id} expenseData={row} />;
    });
  }

  return <div className="expenses-list">{records}</div>;
};

// const ExpensesList = (props) => {
//   if (props.filteredRecords.length === 0) {
//     return <h2 style={{ color: "white" }}>No Data Found</h2>;
//   }
//   return (
//     <div className="expenses-list">
//       {props.filteredRecords.map((row) => {
//         <ExpenseItem key={row.id} expenseData={row} />;
//       })}
//     </div>
//   );
// };
export default ExpensesList;
