import { useState } from "react";

export const useCounter = () => {
  const [value, setValue] = useState(0);

  const onIncrement = () => setValue((q) => q + 1);
  const onDecrement = () => setValue((q) => q - 1);
  const onReset = () => setValue(0);

  return { value, onIncrement, onDecrement, onReset };
};
