import React, {useContext} from 'react';
import {Pie} from 'react-chartjs-2';
import {TxnContext} from './TransactionContext';

export default function PieExample() {

    const [dummyTransaction] = useContext(TxnContext);

    const data = {
        labels: [
            'Education',
            'Shopping',
            'Food',
            'Transfer'
        ],
        datasets: [{
            data: [
                dummyTransaction.filter(txn => txn.category === 'education').reduce((acc,init) => acc+init.amount, 0),
                dummyTransaction.filter(txn => txn.category === 'shopping').reduce((acc,init) => acc+init.amount , 0),
                dummyTransaction.filter(txn => txn.category === 'food').reduce((acc,init) => acc+init.amount , 0),
                dummyTransaction.filter(txn => txn.category === 'transfer').reduce((acc,init) => acc+init.amount , 0)
                
            ],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#2e8b57'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#2e8b569f'
            ]
        }]
    };

    return (
      <div>
        <Pie data={data} />
      </div>
    );
};
