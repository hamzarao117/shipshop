import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import styles from "./AppLayout.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const darkTheme = useSelector((state) => state.view.darkTheme);

  useEffect(() => {
    if (!darkTheme) document.body.style = "background-color:";
    if (darkTheme) document.body.style = "background-color: #121212";
  }, [darkTheme]);

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
