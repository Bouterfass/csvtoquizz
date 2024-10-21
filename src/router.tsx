import { createBrowserRouter } from "react-router-dom";
import Test from "./pages/Test";
import Result from "./pages/Result";
import App from "./App";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/test/:id",
    element: <Test />,
  },
  {
    path: "/result",
    element: <Result />
  },
  {
    path: "/tests"
  }
]);
