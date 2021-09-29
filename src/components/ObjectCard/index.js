import { BoxCard } from "./style";

function ObjectCard({ products, cart, setCart }) {
  const addToCart = (e) => {
    const prodId = +e.target.parentNode.id;
    const newProd = products.filter((produto) => produto.code === prodId);
    setCart([...cart, ...newProd]);
  };

  return (
    <BoxCard>
      {products.map((obj, idx) => (
        <div key={idx} id={obj.code}>
          <p>Código: {obj.code}</p>
          <p>Nome: {obj.name}</p>
          <p>Descrição: {obj.description}</p>
          <p>Preço: {obj.price}</p>
          <p>Desconto: {obj.discount}</p>
          <button onClick={addToCart}>Add To Cart</button>
        </div>
      ))}
    </BoxCard>
  );
}
export default ObjectCard;
