import React, { useEffect, useState } from "react";
import { Message } from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Luis",
    email: "luis8a@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log("use effect execute");
  }, []);

  useEffect(() => {
   // console.log("form state cambio");
  }, [formState]);

  useEffect(() => {
   // console.log("email change");
  }, [email]);

  return (
    <div className="text-center">
      <h1>Formulario With Custom Hook</h1>
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

      {
        ( username === 'Luis') && <Message></Message>
      }
      
    </div>
  );
};

export default SimpleForm;
