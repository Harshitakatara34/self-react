import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../Redux/AuthReducer/authaction";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const [obj, setObj] = useState(initialState);
  const handleInput = (e) => {
    const { name, value } = e.target;

    setObj({ ...obj, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(obj));
    setObj(initialState);
  };
console.log("obj",obj)
  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={handleInput}
        value={obj.email}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleInput}
        value={obj.password}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
