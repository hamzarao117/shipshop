import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import styles from "./AppLayout.module.css";
import { useState } from "react";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [query, setQuery] = useState("");

  return (
    <div className={styles.appLayout}>
      {isLoading && <Loader />}
      <Header query={query} setQuery={setQuery} />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
