import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");

  const filterChangeHandler = (enteredFilterValue) => {
    console.log("change");
    console.log(enteredFilterValue);
    setEnteredYear(enteredFilterValue);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onSaveFilterChange={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
