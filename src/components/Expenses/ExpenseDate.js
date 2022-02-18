import './ExpenseDate.css'

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

  return (
    <div className="expense-date">
        <div className='expense-datemonth'>{month}</div>
        <div className='expense-dateyear'>{day}</div>
        <div className='expense-dateday'>{year}</div>
    </div>
  );
}

export default ExpenseDate;