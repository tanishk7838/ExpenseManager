import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const[isEdit, setisEdit]=useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setisEdit(false);
  };

  const editHandler = () =>{
    setisEdit(true);
  };
  const stopEditing = () =>{
    setisEdit(false);
  }

  return (
    <div className='new-expense'>
      {!isEdit && <button onClick={editHandler}>Add New Expense</button>}
      {isEdit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>
  );
};

export default NewExpense;