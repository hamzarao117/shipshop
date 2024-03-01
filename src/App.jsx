import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Products, { loader as productsLoader } from "./features/store/Store";
import AppLayout from "./ui/AppLayout";
import ProductDetails, {
  loader as detailLoader,
} from "./features/store/ProductDetails";
import Cart from "./features/cart/Cart";
import Bookmark from "./features/wishlist/Bookmark";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <Error />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
        loader: detailLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/bookmark", element: <Bookmark /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
