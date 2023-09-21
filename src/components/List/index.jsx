import { Card } from '../Card';
// 5. Crie o componente List que receberá o state transactions por prop.

// 6. Agora, dentro do componente List, você precisa fazer um map no state transactions. Para cada interação da lista você criará um componente Card.
// Ou seja, se dentro do state transactions existir 3 transações cadastradas, teremos 3 cards em tela.
export function List({ transactions, setTransactions }) {
  return (
    <section className="section__transactions--list">
      <h3>Resumo financeiro</h3>
      {transactions.length > 0 ? (
        <ul className="transactions__list--container">
          {transactions.map((transaction, i) => (
            <Card key={i} transaction={transaction} transactions={transactions} setTransactions={setTransactions} />
          ))}
        </ul>
      ) : (
        <h2>Você ainda não possui nenhum lançamento</h2>
      )}
    </section>
  );
}
