import { useState } from "react";
import Button from "../../ui/Button";
import styles from "./CreateUser.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";

function CreateUser() {
  const [email, setEmail] = useState("hamza@example.com");
  const [password, setPassword] = useState("qwerty");
  const [username, setUsername] = useState("");
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
      <p>👋 Welcome! Please start by telling us your name:</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="name">Name</label>

          <input
            className={styles.input}
            type="text"
            id="name"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
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
