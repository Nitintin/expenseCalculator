import React, {createContext, useState} from 'react';

export const TxnContext = createContext();

export const TransactionProvider = (props) => {
    const [dummyTransactions, setTransaction] = useState([
        { 
            id: 1,
            name: 'admit card', 
            amount: 20,
            type:"expense",
            category:"education"
        },
        { 
            id: 2,
            name: 'Salary', 
            amount: 300, 
            type:"income",
            category:"transfer" 
        },
        { 
            id: 3,
            name: 'Book', 
            amount: 20, 
            type:"expense",
            category:"education" 
        },
        { 
            id: 4,
            name: 'Pizza selling', 
            amount: 150, 
            type:"income",
            category:"food" 
        },
        { 
            id: 5,
            name: 'camera', 
            amount: 120,
            type:"expense",
            category:"shopping"
        },
        { 
            id: 6,
            name: 'FD interest', 
            amount: 300, 
            type:"income",
            category:"transfer" 
        },
        { 
            id: 7,
            name: 'coaching class', 
            amount: 100, 
            type:"expense",
            category:"education" 
        },
        { 
            id: 8,
            name: 'burger', 
            amount: 50, 
            type:"expense",
            category:"food" 
        },
        { 
            id: 9,
            name: 'heater', 
            amount: 200,
            type:"expense",
            category:"shopping"
        },
        { 
            id: 10,
            name: 'social work', 
            amount: 75, 
            type:"income",
            category:"transfer" 
        },
        { 
            id: 11,
            name: 'fuel charges', 
            amount: 10, 
            type:"expense",
            category:"shopping" 
        },
        { 
            id: 12,
            name: 'side buissness', 
            amount: 50,
            type:"income",
            category:"transfer" 
        },
        { 
            id: 13,
            name: 'internships', 
            amount: 57,
            type:"income",
            category:"transfer" 
        },
        { 
            id: 14,
            name: 'valentines date', 
            amount: 350,
            type:"expense",
            category:"food" 
        },
        { 
            id: 15,
            name: 'baes bday', 
            amount: 150,
            type:"expense",
            category:"shopping" 
        },
        { 
            id: 16,
            name: 'free lancing', 
            amount: 150,
            type:"income",
            category:"transfer" 
        },
        { 
            id: 17,
            name: 'dance classes', 
            amount: 98,
            type:"income",
            category:"transfer" 
        }
    ]);

    return (
        <TxnContext.Provider value={[dummyTransactions,setTransaction]}>{props.children}</TxnContext.Provider>
    )
}



