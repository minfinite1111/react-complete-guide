import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";
import React, { useState } from "react";

function ExepenseItem(props) {

  //react hook
  const [title, setTitle] = useState(props.title);

  //let title = props.title; 

  const clickHandler = () => {
    setTitle('Updated!');
    console.log('title')
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExepenseItem;
