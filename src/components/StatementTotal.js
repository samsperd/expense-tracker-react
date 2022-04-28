import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const StatementTotal = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(amount => amount > 0)
                            .reduce((a, b) => ( a += b ), 0)
                            .toFixed(2);
    
    const expense = amounts.filter(amount => amount < 0)
                            .reduce((x, y) => (x -= y), 0)
                            .toFixed(2);

  return (

    <div className="p-6 shadow-lg rounded-lg flex flex-row text-gray-700">
        <div className="text-center space-y-2 flex-1 border-r">
            <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    INCOME
                </p>
                <p className="text-green-400 text-lg font-normal">
                    +${ income }
                </p>
            </div>
        </div>
        <div className="text-center space-y-2 flex-1 border-l">
            <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    EXPENSE
                </p>
                <p className="text-red-500 text-lg font-normal">
                    -${ expense }
                </p>
            </div>
        </div>
    </div>


  )
}
