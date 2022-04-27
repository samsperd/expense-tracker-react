import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
// import Input from '../input.module.scss';

export const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  }
  

  return (
    <div className='p-6 m-5 mx-auto bg-white rounded-xl shadow-md items-center w-full'>
        <h1 className='font-bold text-xl'>Add New Transaction</h1>
        <form onSubmit={onSubmit}>
          <input
            className='w-full m-2 p-2 border rounded-md'
            type="text"
            value={text}
            onChange={
              (e) => setText(e.target.value)
            }
            placeholder="Enter text..."
          />
          <input
            className='w-full m-2 p-2 border rounded-md'
            type="number" 
            value={amount}
            onChange={
              (e) => setAmount(e.target.value)
            }
            placeholder="Add amount"
          />
          {/* <div className={Input.choose} onChange={onChangeValue}>
            <input type="radio" checked />
            <input type="radio" />
          </div> */}
          <div className='w-full'>
            <input 
                type="submit"
                className='bg-black text-white py-2 px-4 mr-0 rounded-lg'
                value="Add"
              />
          </div>
        </form>
    </div>
  )
}
