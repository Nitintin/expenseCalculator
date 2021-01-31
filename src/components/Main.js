import React,{useState} from 'react'
import {TransactionProvider} from './TransactionContext'
import Balance from './Balance';
import IncomeExpense from './IncomeExpense'
import Transaction from './Transaction'
import NewTransaction from './NewTransaction'
import Dashboard from './Dashboard'

function Main() {

    const [layout,changeLayout] = useState([
        {div1 : "twoBytwo"},
        {div2 : "twoBytwo"},
        {div3 : "twoBytwo"},
        {div4 : "twoBytwo"}
    ]);

    const makeFullScreen=(e)=>{
        const updateState = layout.map(update => {
            if(Object.keys(update)[0]!==e.target.id){
                return({
                    [Object.keys(update)[0]] : 'smallScreen'
                })
            }else{
                return({
                    [e.target.id] :'fullScreen'
                });
            }
        });
        changeLayout(updateState);
    }

    const makeDefaultScreen=(e)=>{
        changeLayout([
            {div1 : "twoBytwo"},
            {div2 : "twoBytwo"},
            {div3 : "twoBytwo"},
            {div4 : "twoBytwo"}
        ]);
    }

    const layoutToggle=()=>{
        if(1===1){
            return(
                <div className="stylerDiv">
                    <div className="expenseTracker">
                        <Balance/>
                        <IncomeExpense/>
                        <Transaction/>
                        <NewTransaction/>
                    </div>
                    <div className="dashboard is-closed">
                        <Dashboard/>
                    </div>
                </div>
            )
        }else{
            return(
                <>
                    <div className={layout[0].div1 + " mosaic"}>
                        <div className="blur">
                            <Balance/>
                            <IncomeExpense/>
                        </div>
                        <button className="fullscreenBtn" id="div1" onClick={makeFullScreen}>View your balance</button>
                        <button className="twoBytwoBtn" onClick={makeDefaultScreen}>Reset View</button>
                    </div>
                    <div className={layout[1].div2 + " mosaic"}>
                        <div className="blur">
                            <Dashboard/>
                        </div>
                        <button className="fullscreenBtn" id="div2" onClick={makeFullScreen}>View Dashboard</button>
                        <button className="twoBytwoBtn" onClick={makeDefaultScreen}>Reset View</button>
                    </div>
                    <div className={layout[2].div3 + " mosaic"}>
                        <div className="blur">
                            <Transaction/>
                        </div>
                        <button className="fullscreenBtn" id="div3" onClick={makeFullScreen}>View transactions</button>
                        <button className="twoBytwoBtn" onClick={makeDefaultScreen}>Reset View</button>
                    </div>
                    <div className={layout[3].div4 + " mosaic"}>
                        <div className="blur">
                            <NewTransaction/>
                        </div>
                        <button className="fullscreenBtn" id="div4" onClick={makeFullScreen}>Add Transaction</button>
                        <button className="twoBytwoBtn" onClick={makeDefaultScreen}>Reset View</button>
                    </div>
                </>
            )
        }
    }
    return (
        <TransactionProvider>
            <div className="Main">
                {layoutToggle()}
            </div>
        </TransactionProvider>
    )
}

export default Main;
