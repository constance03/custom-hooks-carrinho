import { useCounter } from "../hooks/useCounter";
import { Item } from "./Item";

export const Cart = () => {
  // const [quantity, setQuantity] = useState(0);
  const quantity = useCounter(0);

  return (
    <div className="Cart">
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity.value}
        onIncrement={quantity.onIncrement}
        onDecrement={quantity.onDecrement}
        onReset={quantity.onReset}
        // quantity={quantity}
        // onIncrement={() => setQuantity((q) => q + 1)}
        // onDecrement={() => setQuantity((q) => q - 1)}
        // onReset={() => setQuantity(0)}
      />
    </div>
  );
};
