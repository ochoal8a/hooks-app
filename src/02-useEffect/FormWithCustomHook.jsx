import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

const FormWithCustomHook = () => {
  const { username, email, password, formState, onInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //const { username, email, password } = formState;

  return (
    <div className="text-center">
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="luis8a@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      {username === "Luis" && <Message></Message>}
    </div>
  );
};

export default FormWithCustomHook;
