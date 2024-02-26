import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiStore";
import StoreItem from "./StoreItem";
import styles from "./Store.module.css";

function Store() {
  const store = useLoaderData();

  return (
    <ul className={styles.products}>
      {store?.map((storeItem) => (
        <StoreItem storeItem={storeItem} key={storeItem.id} />
      ))}
    </ul>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const store = await getProducts();
  console.log(store);
  return store;
}
export default Store;
