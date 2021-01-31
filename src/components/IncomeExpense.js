import React, {useContext} from 'react';
import {TxnContext} from './TransactionContext'

const IncomeExpense = () => {
    const [dummyTransactions]=useContext(TxnContext);
    const incomeArray = dummyTransactions.filter(income => income.type === 'income');
    const totalIncome = incomeArray.reduce( (acc,initial) => acc+initial.amount , 0);

    const expenseArray = dummyTransactions.filter(expense => expense.type === 'expense');
    const totalExpense = expenseArray.reduce((acc,initial)=>acc+initial.amount,0);

    return (
        <div className="incomeExpense">
            <div className="income">
                <p>Income</p>
                <h2><span> +</span> ${totalIncome}</h2>
            </div>
            <div className="expense">
                <p>Expense</p>
                <h2><span>-</span> ${totalExpense}</h2>
            </div>
        </div>
    )
}

export default IncomeExpense;
