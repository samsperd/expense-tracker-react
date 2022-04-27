import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Header } from './components/Header';
import { StatementTotal } from './components/StatementTotal';
import { Transactions } from './components/Transactions';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider className="App">
      <Header />

      <div className='container mx-auto'>
        <StatementTotal></StatementTotal>
        <Transactions></Transactions>
        <AddTransaction></AddTransaction>
      </div>
    </GlobalProvider>
  );
}

export default App;
