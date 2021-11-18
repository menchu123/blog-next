/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "../../pages/index.module.css";

const Login = () => {
  const initialValues = {
    name: "",
    imageURL: "",
  };
  const [userData, setUserData] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (userData.name !== "" && userData.imageURL !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userData]);

  const onLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <form
      className={styles.loginform}
      noValidate
      autoComplete="off"
      onSubmit={onLogin}
    >
      <h5 className="login-title">Login</h5>
      <div className="form-inputs">
        <input
          type="text"
          className="input input--name"
          id="name"
          placeholder="Name"
          value={userData.name}
          onChange={(event) => onChange(event)}
        />

        <input
          type="text"
          className="input input--imageURL"
          id="imageURL"
          placeholder="Avatar URL"
          value={userData.imageURL}
          onChange={(event) => onChange(event)}
        />

        <button type="submit" className="login-btn" disabled={isDisabled}>
          LOGIN
        </button>
        {userData.imageURL ? (
          <img src={userData.imageURL} alt="" height="100" />
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default Login;
