// 7. No componente Card você renderizará as informações de uma transaction.
// Repare que se for entrada terá um detalhe verde no card, e caso seja saída esse detalhe será cinza.
export function Card({ transaction, transactions, setTransactions }) {
  function handleTransaction(removedTransaction) {
    const newTransactions = transactions.filter(
      transaction => transaction.id !== removedTransaction.id
    );
    setTransactions(newTransactions);
  }

  return (
    <li className={transaction.tType === 'entrada' ? "transactions__list--card income" : "transactions__list--card"}>
      <div className="transactions__card--description">
        <h2>{transaction.tDescription}</h2>
        <small className="transactions__description--type">{transaction.tType}</small>
      </div>
      <div className="transactions__card--amount">
        <small>
          {Number(transaction.tValue).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </small>
        <button
          onClick={() => {
            handleTransaction(transaction);
          }}
        >
          Excluir
        </button>
      </div>
    </li>
  );
}
