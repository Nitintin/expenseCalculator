import React,{useContext} from 'react'
import {TxnContext} from './TransactionContext'

const Balance = () => {
    const [dummyTransactions]=useContext(TxnContext);
    const incomeArray = dummyTransactions.filter(income => income.type === 'income');
    const totalIncome = incomeArray.reduce( (acc,initial) => acc+initial.amount , 0);

    const expenseArray = dummyTransactions.filter(expense => expense.type === 'expense');
    const totalExpense = expenseArray.reduce((acc,initial)=>acc+initial.amount,0);
    
    return (
        <div className="totalBalance">
            <p>Your account balance is :</p>
            <h3>${totalIncome-totalExpense}</h3>
        </div>
    )
}

export default Balance