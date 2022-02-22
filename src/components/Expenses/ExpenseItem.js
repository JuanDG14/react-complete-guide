import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);


  function clickHandler() {
    setTitle('Updated');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-itemdescription">
        <h2>{title}</h2>
        <div className="expense-itemprice">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Title Change</button>
    </Card>
  );
}

export default ExpenseItem;
