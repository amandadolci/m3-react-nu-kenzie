import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { TotalMoney } from './components/TotalMoney';
import { List } from './components/List';

// 2. No seu componente App, você precisa ter um state transactions que receberá uma lista que conterá tanto entradas quanto saídas.
function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <Header />
      <main>
        <section className="section__transactions--insertAndBalance">
          <Form transactions={transactions} setTransactions={setTransactions} />
          {transactions.length > 0 ? <TotalMoney transactions={transactions} /> : <></>}
        </section>
        <List transactions={transactions} setTransactions={setTransactions} />
      </main>
    </>
  );
}

export default App;
