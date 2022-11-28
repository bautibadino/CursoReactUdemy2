import React from "react";
import { useState } from "react";
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'bautista@google.com'
    })

    const {username, email} = formState;
    const onInputChange = ({target}) =>{
    
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        })

    }
    return (
    <>
      <h1>SimpleForm</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={email}
        onChange = {onInputChange}
        />
    </>
  );
};
