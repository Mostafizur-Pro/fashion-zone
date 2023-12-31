import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      //   {
      //     path: "/products",
      //     element: <Products />,
      //   },
      //   {
      //     path: "/product-details/:id",
      //     element: <ProductDetails />,
      //   },
      //   {
      //     path: "/checkout",
      //     element: <Checkout />,
      //   },
    ],
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default routes;
