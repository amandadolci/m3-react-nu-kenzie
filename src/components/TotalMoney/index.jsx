// 8. O componente TotalMoney, recebe por prop o state transactions e fará a somatória dos valores de todas as transações.
export function TotalMoney({ transactions }) {
  const totalMoney = transactions.reduce((previousValue, currentTransaction) => {
    const transactionValue = Number(currentTransaction.tValue);
    const transactionType = currentTransaction.tType;
    if (transactionType === 'despesa') {
      return previousValue - transactionValue;
    } else {
      return previousValue + transactionValue;
    }
  }, 0);

  return (
    <div className="transactions__balance--container">
      <span>
        <h3>Valor total:</h3>
        <h3 className="transactions__balance--value">{totalMoney.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
      </span>
      <small>O valor se refere ao saldo</small>
    </div>
  );
}
