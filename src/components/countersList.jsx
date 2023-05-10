import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id != id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id !== id) {
          return counter;
        } else {
          return {
            ...counter,
            value: counter.value + 1,
          };
        }
      })
    );
  };

  const handleDecrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id !== id) {
          return counter;
        } else {
          return {
            ...counter,
            value: counter.value - 1,
          };
        }
      })
    );
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          // id={count.id}
          // value={count.value}
          // name={count.name}
          {...count} //the same
          onDelete={handleDelete}
          onIncrement={() => handleIncrement(count.id)}
          onDecrement={() => handleDecrement(count.id)}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
