import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("Rohit");
  const [amount, setAmount] = useState(10);
  const [date, setDate] = useState(new Date());

  // const updateTitle = (e) => {
  //     setTitle(e.target.value);
  //     // console.log(e.target.value)
  //     // console.log({...data})
  //     // setData({...data, title: e.target.value});
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Add expense button click")
    // console.log(title,amount,date)

    // const month =date.toLocaleString("en-us", { month: "long" });
    // const year = date.getFullYear();
    // const date = date.getDate();

    const data = {
      id: Math.random().toString(),
      item: title,
      price: amount,
      date: new Date(date),
    };
    // console.log(data);
    props.sendData(data);
    // alert("Expense record added successfully!")

    setTitle("");
    setAmount("");
    setDate("");

    props.setShowExpenseForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={updateTitle} value={title} /> */}
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          {/* <input type="number" onChange={(e) => setData({...data, amount: e.target.value})} value={data.amount}/> */}
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          {/* <input type="date" onChange={(e) => setData({...data, date: e.target.value})} /> */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button " onClick={() => props.setShowExpenseForm(false)}>
          Cancel
        </button>
        <button type="submit">Add expenses</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
