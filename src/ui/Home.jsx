import { useSelector } from "react-redux";
import styles from "./Home.module.css";
import Button from "./Button";
import CreateUser from "../features/user/CreateUser";

function Home() {
  const username = useSelector((state) => state.user.username);
  const darkTheme = useSelector((state) => state.view.darkTheme);

  return (
    <div className={darkTheme ? styles.darkHomeHeading : styles.homeHeading}>
      <h1>
        The best store.
        <br />
        <span>For Shoping your daily products.</span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/products">check store, {username}</Button>
      )}
    </div>
  );
}

export default Home;
