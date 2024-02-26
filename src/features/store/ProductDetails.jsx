import { useLoaderData } from "react-router-dom";
import { getProductDetails } from "../../services/apiStore";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
  const productDetails = useLoaderData();
  console.log(productDetails);

  return <div className={styles.productDetails}>details</div>;
}

export default ProductDetails;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const product = await getProductDetails();
  console.log(product);
  return product;
}
