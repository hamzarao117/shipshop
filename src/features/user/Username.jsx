import { useSelector } from "react-redux";
import styles from "./Username.module.css";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return;

  return <div className={styles.username}>{username}</div>;
}

export default Username;
