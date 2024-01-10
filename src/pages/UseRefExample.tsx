import { useRef } from "react";
const UseRefExample = () => {
  const myRef = useRef(0);
  const increment = () => {
    myRef.current = myRef.current + 1;
    console.log("Ref", myRef.current);
  };

  return (
    <div>
      <h1>useRef</h1>
      <button onClick={() => increment()}>{myRef.current}</button>
    </div>
  );
};

export default UseRefExample;
