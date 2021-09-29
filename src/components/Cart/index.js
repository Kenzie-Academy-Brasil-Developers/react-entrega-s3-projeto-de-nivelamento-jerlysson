import { BoxCart } from "./style";

function Cart({ cart }) {
  const TotalPrice = cart.reduce((total, idx) => total + idx.price, 0);
  const TotalDiscount = cart.reduce((total, idx) => total + idx.discount, 0);
  const ValorApagar = TotalPrice - TotalDiscount;

  console.log(cart);

  return (
    <BoxCart>
      <h3>Carrinho! </h3>
      <p>Valor Total: R$ {TotalPrice.toFixed(2)}</p>
      <p>Desconto Total: R$ {TotalDiscount.toFixed(2)}</p>
      <p>Total a Pagar: R$ {ValorApagar.toFixed(2)}</p>

      {cart.map((prod, idx) => (
        <div key={idx}>
          <p>Nome: {prod.name}</p>
          <p>Desconto: {prod.discount}</p>
          <p>Valor: {prod.price}</p>
        </div>
      ))}
    </BoxCart>
  );
}
export default Cart;
