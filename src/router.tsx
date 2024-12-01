import { createBrowserRouter } from 'react-router-dom';
import Test from './pages/Test';
import Result from './pages/Result';
import Train from './pages/Train';
import Shiritori from './pages/Shiritori';
import App from './App';
import Layout from './Layout';
import KanjiKetsugou from './pages/KanjiKetsugou';
import TangoSagashiGame from './pages/TangoSagashiGame';
import TangoSagashi from './pages/TangoSagashi';

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
        element: <Train />,
      },
      {
        path: 'shiritori',
        element: <Shiritori />
      },
      {
        path:'kanji-ketsugou',
        element: <KanjiKetsugou />
      },
      {
        path: 'tango-sagashi',
        element: <TangoSagashi />
      },
      {
        path: 'ts-game',
        element: <TangoSagashiGame />
      }
    ],
  },
]);
