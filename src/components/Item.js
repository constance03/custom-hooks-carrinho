export const Item = (props) => {
  return (
    <div>
      <p>{props.label}</p>
      <p>Quantidade: {props.quantity}</p>
      <div>
        <button onClick={props.onDecrement}>-</button>
        <button onClick={props.onReset}>Restaurar</button>
        <button onClick={props.onIncrement}>+</button>
      </div>
    </div>
  );
};
