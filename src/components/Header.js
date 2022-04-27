import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import logo from '../logo.svg';

export const Header = () => {

  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount);

  const total = amount.reduce((a, b) => (a += b), 0).toFixed(2);

  return (
    <div className="p-4 m-5 bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src={logo} alt="imageAlt" />
      </div>
      <div>
        <div className="text-slate-500">Expense Tracker</div>
        <p className="text-xl font-bold text-black">Your Balance: ${ total }</p>
      </div>
    </div>
    
  )
}
