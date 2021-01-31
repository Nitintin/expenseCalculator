import React, {useState,useContext} from 'react';
import {TxnContext} from './TransactionContext'

export default function NewTransaction() {

    const [dummyTransactions,setTransaction]=useContext(TxnContext);

    const [name,setName] = useState('');
    const [amount,setAmount] = useState('');
    const [type,setType] = useState('');
    const [category,setCategory] = useState('');

    const addNewTxn=(e)=>{
        e.preventDefault();
        const lastId = dummyTransactions[dummyTransactions.length - 1].id;
        setTransaction(prevTxn => [...prevTxn,{
            id: lastId+1,
            name: name, 
            amount: parseInt(amount), 
            type:type,
            category:category
        }])
        
    }
    return (
        <div className="newTransaction">
            <h2>Add New Transaction</h2>
            <form>
                <input 
                    type="text" 
                    placeholder="Add transaction name" 
                    name="txnName" 
                    onChange={(e)=>setName(e.target.value)}
                    required  />
                <br/>
                <input 
                    type="number" 
                    placeholder="Amount" 
                    name="txnAMount" 
                    onChange={(e)=>setAmount(e.target.value)}
                    required/>
                <br/>
                <div className="newTxnType">
                    <input 
                        type="radio" 
                        value="expense" 
                        name="type" 
                        id="expense" 
                        onClick={(e)=>setType(e.target.id)}
                        required/>
                    <label htmlFor="expense">Expense</label>
                    <input 
                        type="radio" 
                        value="income" 
                        name="type" 
                        id="income"
                        onClick={(e)=>setType(e.target.id)}
                        required />
                    <label htmlFor="income">Income</label>
                </div>
                <div className="newTxnCat">
                    <select placeholder="Choose transaction category" name="txnCategory" onChange={(e)=>setCategory(e.target.value)} >
                        <option value="others">Choose transaction category</option>
                        <option value="shopping">Shopping</option>
                        <option value="transfer">Transfer</option>
                        <option value="food">Food</option>
                        <option value="education">Education</option>
                    </select>
                </div>
                <br/>
                <button type="submit" name="txnSubmit" className="txnSubmit" onClick={addNewTxn}>Add transaction</button>
            </form>
        </div>
    )
}
