import { ProductsList } from "../assets/product";
import FormAddFruit from "../components/FormAddFruit";
import { useState } from "react";
import ObjectCard from "../components/ObjectCard";
import Cart from "../components/Cart";
import { BoxProduct } from "./style";

function Routes() {
  const [products, setProducts] = useState(ProductsList);
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>Teste de Nivelamento!</h1>
      <FormAddFruit setProducts={setProducts} products={products} />
      <BoxProduct>
        <ObjectCard products={products} cart={cart} setCart={setCart} />
        <Cart cart={cart} />
      </BoxProduct>
    </>
  );
}
export default Routes;
