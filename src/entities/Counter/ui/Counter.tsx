import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import "./Counter.css";
interface ICounterProps {
  className?: string;
}
export const Counter: React.FC<ICounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={classNames("Counter", {}, [className])}>
      <h1 data-testid="value-title">{counterValue}</h1>
      <button data-testid="increment-btn" onClick={increment}>
        +
      </button>
      <button data-testid="decrement-btn" onClick={decrement}>
        -
      </button>
    </div>
  );
};
