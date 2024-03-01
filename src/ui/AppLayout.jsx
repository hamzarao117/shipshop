import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className={styles.appLayout}>
      {isLoading && <Loader />}
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
