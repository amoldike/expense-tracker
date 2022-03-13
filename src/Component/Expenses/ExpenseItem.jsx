import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
// import Expenses from "../Expenses/Expenses";
// import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem";

const ExpenseItem = (props) => {
  // let desc = props.expenseData.item;

  // const [desc, setDesc] = useState(props.expenseData.item)

  // const clickHandler = () =>{
  //   // console.log(desc);
  //   // desc = "updated"
  //   // console.log(desc)

  // setDesc ("updated");

  // }

  return (
    <div className="expense-item">
      {/* <ExpenseDate months={props.months} expenseData={props.expenseData} /> */}
      <ExpenseDate expenseData={props.expenseData} />

      <div className="expense-item__description">
        <h2>{props.expenseData.item}</h2>
      </div>

      <div className="expense-item__price">$ {props.expenseData.price}</div>

      {/* <div>
      <button onClick={clickHandler}>Change Title </button>
      </div> */}
    </div>
  );
};
export default ExpenseItem;
