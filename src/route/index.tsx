import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default routes;
