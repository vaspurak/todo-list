import { useState } from "react";
import React from "react";

const Child = React.memo(
  ({ count, other }) => {
    return (
      <div>
        Count: {count}
        {other ? <h1>Privet</h1> : <h4>Poka</h4>}
      </div>
    );
  },
  (nextProps, prevProps) => {
    return (
      prevProps.count === nextProps.count && prevProps.other === nextProps.other
    );
  }
);

const Parent = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("Rendered Count");
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setOther(!other);
          console.log(other);
        }}
      >
        Toggle
      </button>
      <Child count={count} other={other} />
    </>
  );
};

export default Parent;
