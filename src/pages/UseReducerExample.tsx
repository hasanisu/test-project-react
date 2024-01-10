import { ChangeEvent, useReducer } from "react";

const initialState = { name: "", email: "", password: "" };
type TActon = {
  type: string;
  payload: string;
};

const reducer = (currentState: typeof initialState, action: TActon) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addEmail":
      return { ...currentState, email: action.payload };
    case "addPass":
      return { ...currentState, password: action.payload };

    default:
      return currentState;
  }
};
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={(e) =>
          dispatch({ type: "addEmail", payload: e.target.value })
        }
        type="text"
        name="email"
        id="email"
      />
      <input
        onChange={(e) => dispatch({ type: "addPass", payload: e.target.value })}
        type="text"
        name="password"
        id="password"
      />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UseReducerExample;
