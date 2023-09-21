# React - Entrega S1 - NuKenzie

1. Primeiro, clone o repositório.

2. No seu componente App, você precisa ter um state transactions que receberá uma lista que conterá tanto entradas quanto saídas.

3. Crie um componente Form, para cadastrar novas Entradas e Saídas, com o seguinte formato:

   - Input para pegar o valor.
   - Input para pegar a descrição.
   - Select para escolher entre entrada e saída.
   - Button para enviar as informações captadas no formulário.

4. O componente Form precisa receber por prop o state transactions além do settransactions para poder adicionar novas entradas e saídas.

5. Crie o componente List que receberá o state transactions por prop.

6. Agora, dentro do componente List, você precisa fazer um map no state transactions. Para cada interação da lista você criará um componente Card. Ou seja, se dentro do state transactions existir 3 transações cadastradas, teremos 3 cards em tela.

7. No componente Card você renderizará as informações de uma transaction. Repare que se for entrada terá um detalhe verde no card, e caso seja saída esse detalhe será cinza.

8. O componente TotalMoney, recebe por prop o state transactions e fará a somatória dos valores de todas as transações.

9. Excluir Card - Você precisa criar um botão de exclusão do card e deixa-ló funcional, ou seja, você deve excluir o item da lista ao clicar no botão.
