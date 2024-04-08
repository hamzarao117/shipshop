import { useState } from "react";
import Button from "../../ui/Button";
import styles from "./CreateUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";

function CreateUser() {
  const [email, setEmail] = useState("hamza@example.com");
  const [password, setPassword] = useState("qwerty");
  const [username, setUsername] = useState("");
  const darkTheme = useSelector((state) => state.view.darkTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/products");
  }

  return (
    <>
      <p className={darkTheme ? styles.darkHeading : styles.heading}>
        👋 Welcome! Please start by telling us your name:
      </p>
      <form
        className={darkTheme ? styles.darkForm : styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <label
            htmlFor="name"
            className={darkTheme ? styles.darkLabel : styles.label}
          >
            Name
          </label>

          <input
            className={darkTheme ? styles.darkInput : styles.input}
            type="text"
            id="name"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className={styles.row}>
          <label
            htmlFor="email"
            className={darkTheme ? styles.darkLabel : styles.label}
          >
            Email address
          </label>
          <input
            className={darkTheme ? styles.darkInput : styles.input}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label
            htmlFor="password"
            className={darkTheme ? styles.darkLabel : styles.label}
          >
            Password
          </label>
          <input
            className={darkTheme ? styles.darkInput : styles.input}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {username !== "" && (
          <div>
            <Button>Login</Button>
          </div>
        )}
      </form>
    </>
  );
}

export default CreateUser;
