import React, {useContext} from 'react';
import {TxnContext} from './TransactionContext'

export default function Transaction() {
    const [dummyTransactions,setTransaction]=useContext(TxnContext);

    const deleteTxn = (e) => setTransaction(dummyTransactions.filter(txn => txn.id != e.target.id))

    const recenttxn=()=>{
        let txns = dummyTransactions.map((txn,index) => {
            return(
                <div className={txn.type + " txn"} key={txn.id}>
                    <div className="transDetail"><b>{txn.category}  ||  </b>{txn.name} = ${txn.amount}</div>
                    <button className="transAction" id={txn.id} onClick={(e)=>deleteTxn(e)}> X </button>
                </div>
            );
        })
        return(txns.reverse());
    }

    return (
        <div className="transactions">
            <h2>Recent Transaction:</h2>
            <div className="list">
                {recenttxn()}
            </div>
        </div>
    )
}
