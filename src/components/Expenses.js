import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from './Card'

function Expenses(props) {
  return (
    <Card className="expenses">
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
  );
}

export default Expenses;
