import { createBrowserRouter } from "react-router-dom";
import Test from "./pages/Test";
import App from "./App";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/test/:id",
    element: <Test />,
  },
]);
