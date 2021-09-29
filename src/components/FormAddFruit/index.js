import { useForm } from "react-hook-form";
import { Form } from "./style";

function FormAddFruit({ setProducts, products }) {
  const { register, handleSubmit } = useForm();

  const handleClick = (data) => {
    data.code = +data.code;
    data.price = +data.price.replace(",", ".");
    data.discount = +data.discount.replace(",", ".");
    setProducts([...products, data]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleClick)}>
        <input placeholder="Nome" {...register("name")} />
        <div>
          <input placeholder="Preço" {...register("price")} />
          <input placeholder="Codigo" {...register("code")} />
          <input placeholder="Desconto" {...register("discount")} />
        </div>
        <textarea
          placeholder="Descrição"
          rows="4"
          {...register("description")}
        />

        <button type="submit">Cadastrar Produto</button>
      </Form>
    </>
  );
}
export default FormAddFruit;
