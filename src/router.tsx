import { createBrowserRouter } from 'react-router-dom';
import Test from './pages/Test';
import Result from './pages/Result';
import Train from './pages/Train';
import App from './App';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    path: '/', // La route racine
    element: <Layout />, // Utilisation du Layout
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'test/:id',
        element: <Test />,
      },
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: 'train',
        element: <Train />, // Exemple d'une autre page
      },
    ],
  },
]);
