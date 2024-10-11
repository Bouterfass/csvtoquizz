import { createBrowserRouter } from "react-router-dom";
import Test from "./pages/Test";
import Save from "./pages/Save";
import App from "./App";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/test/:id",
    element: <Test />,
  },
  {
    path: "/save",
    element: <Save />
  }
]);
