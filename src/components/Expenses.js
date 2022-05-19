import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");

  const filterChangeHandler = (enteredFilterValue) => {
    console.log("change");
    console.log(enteredFilterValue);
    setEnteredYear(enteredFilterValue);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={enteredYear} onSaveFilterChange={filterChangeHandler} />
        {props.items.map((items) => {
          return (
            <ExpenseItem
              title={items.title}
              amount={items.amount}
              date={items.date}
            ></ExpenseItem>
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
