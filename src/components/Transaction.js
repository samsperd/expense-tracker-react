import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);

    const color = transaction.amount > 0 ? 'border-green-400' : 'border-red-400';
    const textColor = transaction.amount > 0 ? 'text-green-500' : 'text-red-500';

  return (
      <div>
        <hr />
        <div onClick={() => deleteTransaction(transaction.id)} className={'p-3 m-2 flex-row flex border-l-4 bg-white rounded-xl shadow-md w-full ' + color }>
            <span className='flex-1 text-justify'>
                {transaction.text}
            </span>
            <span className={'flex-1 text-right pr-3 ' + textColor }>
                {sign}${ Math.abs(transaction.amount)}
            </span>
            <span className=' pl-1'>
                <button className="inline-block px-4 py-2 hover:bg-gray-100 text-red-600 text-sm leading-tight rounded border-l hover:shadow-md bg-white">
                    &times;
                </button>
                
            </span>
        </div>
      </div>

  )
}
