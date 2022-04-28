import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import '../input.css';

export const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const [value, setValue] = useState('credit');

  const handleChange = e => {
    setValue(e);
  }

  const onSubmit = e => {
    e.preventDefault();

    var add = "+";
    var subtract = "-";
    var figure = amount;

    if (value === 'credit') {
      figure = (add.concat(amount));

    }
    else {
      figure = (subtract.concat(amount));
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +figure
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
          <div>
            <h5 className='font-medium leading-tight text-base mt-0 mb-2 text-gray-600'>
            * Please select the kind of transaction
          </h5>
            <div className="choose">
              <div className="selection">
                <input
                  id="pizza"
                  onChange={(e) => handleChange(e.target.value)} 
                  checked={value === 'credit'} 
                  type="radio"
                  name='choice'
                  value='credit'
                />
                <label htmlFor="pizza">Credit</label>
              </div>
              <div className="selection">
                <input 
                  id="burger"
                  onChange={(e) => handleChange(e.target.value)}
                  checked={value === 'debit'}
                  type="radio"
                  name='choice'
                  value='debit'
                />
                <label htmlFor="burger">Debit</label>
              </div>
            </div>
          </div>
        <div className='w-full text-right'>
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
