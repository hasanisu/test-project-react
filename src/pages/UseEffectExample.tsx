import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <button onClick={() => setHidden((prev) => !prev)}>
        {hidden ? "Show" : "Hide"}
      </button>
      {/* {!hidden && <Counter></Counter>} */}
      {!hidden && <Todo></Todo>}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("render");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1>{count}</h1>;
};

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));

    return () => {
      controller.abort();
    };
  }, []);

  return <div>TODO</div>;
};

export default UseEffectExample;
