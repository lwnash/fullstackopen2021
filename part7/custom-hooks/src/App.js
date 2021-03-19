import React, { useState } from "react";

const useCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  const zero = () => {
    setValue(0);
  };

  return {
    value,
    increase,
    decrease,
    zero,
  };
};

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

const App = (props) => {
  const counter = useCounter();
  const name = useField("text");
  const height = useField('number')

  return (
    <div>
      <div>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>plus</button>
        <button onClick={counter.decrease}>minus</button>
        <button onClick={counter.zero}>zero</button>
      </div>
      <div>
        <form>
          <input {...name} />
          <br />
          <input {...height} />
        </form>
        <div>{name.value} {height.value}</div>
      </div>
    </div>
  );
};

export default App;
