import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import App from '@/App';
import Home from '@/modules/home/Home';
import SignUp from '@/modules/auth/SignUp';

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.HOME} replace />,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUp />,
      },
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
    ],
  },
]);
