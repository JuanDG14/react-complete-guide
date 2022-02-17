import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-itemdescription">
        <h2>{props.title}</h2>
        <div className="expense-itemprice">$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
