import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);

    const color = transaction.amount > 0 ? 'border-green-400' : 'border-red-400';

    console.log(color);

  return (
      <div>
        <hr />
        <div onClick={() => deleteTransaction(transaction.id)} className={'p-3 m-2 flex-row flex border-l-4 bg-white rounded-xl shadow-md w-full ' + color }>
            <span className='flex-1 text-justify'>
                {transaction.text}
            </span>
            <span className='flex-1 text-right'>
                {sign}${ Math.abs(transaction.amount)}
            </span>
        </div>
      </div>

  )
}
