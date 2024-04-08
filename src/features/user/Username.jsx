import { useSelector } from "react-redux";
import styles from "./Username.module.css";

function Username() {
  const username = useSelector((state) => state.user.username);
  const darkTheme = useSelector((state) => state.view.darkTheme);

  if (!username) return;

  return (
    <div className={darkTheme ? styles.darkUsername : styles.username}>
      {username}
    </div>
  );
}

export default Username;
