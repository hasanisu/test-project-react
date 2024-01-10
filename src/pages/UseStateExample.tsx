import * as React from "react";
import { useState } from "react";

const UseStateExample = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });

  const handlerSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [inputName]: value });
    console.log({ ...user, [inputName]: value });
  };

  return (
    <form onSubmit={handlerSubmit} action="">
      <input onChange={handleChange} type="text" name="name" id="name" />
      <input onChange={handleChange} type="text" name="email" id="email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseStateExample;
