import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const Transactions = () => {

    const { transactions } = useContext(GlobalContext);

  return (
    <div className='p-6 m-5 mx-auto bg-black rounded-xl shadow-md items-center w-full'>
        <h1 className='font-bold text-xl text-white'>History</h1>
        {
            transactions.map(transaction => (
                <Transaction key={transaction.id}
                    transaction={transaction}
                />
            ))
        }
    </div>
  )
}
