// 3. Crie um componente Form, para cadastrar novas Entradas e Saídas, com o seguinte formato:

//    - Input para pegar a descrição.
//    - Input para pegar o valor.
//    - Select para escolher entre entrada e saída.
//    - Button para enviar as informações captadas no formulário.

// 4. O componente Form precisa receber por prop o state transactions além do setTransactions para poder adicionar novas entradas e saídas.

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Form({ transactions, setTransactions }) {
  const [transaction, setTransaction] = useState({
    tDescription: '',
    tValue: '',
    tType: '',
  });

  function addTransaction(transaction) {
    const newTransaction = { ...transaction, id: uuidv4() };
    setTransactions([...transactions, newTransaction]);
  }

  const isEmpty = transaction.tDescription === '' || transaction.tValue === '' || transaction.tType === '';

  return (
    <form
      className="transactions__insert--form"
      onSubmit={e => {
        e.preventDefault();
        addTransaction(transaction);
        setTransaction({
          tDescription: '',
          tValue: '',
          tType: '',
        });
      }}>
      <div className="insert__form--description">
        <label htmlFor="tDescription">Descrição</label>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          value={transaction.tDescription}
          onChange={e => setTransaction({ ...transaction, tDescription: e.target.value })}
          required
        />
        <small>Ex.: Compra de roupas</small>
      </div>
      <div className="insert__form--value">
        <label htmlFor="tValue">Valor (R$)</label>
        <input
          type="number"
          placeholder="R$0,00"
          value={transaction.tValue}
          onChange={e => setTransaction({ ...transaction, tValue: e.target.value })}
          required
          min={0}
          step="0.01"
          inputMode="decimal"
        />
      </div>
      <div className="insert__form--type">
        <label htmlFor="tType">Tipo de transação</label>
        <select value={transaction.tType} onChange={e => setTransaction({ ...transaction, tType: e.target.value })} required>
          <option value="" disabled hidden>
            Selecione
          </option>
          <option value="entrada">Entrada</option>
          <option value="despesa">Despesa</option>
        </select>
      </div>
      <button disabled={isEmpty ? true : false}>Inserir valor</button>
    </form>
  );
}
