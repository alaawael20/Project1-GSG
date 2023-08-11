import { Navigate } from 'react-router-dom';
import { PATHS } from './pathes';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ProfilePage from '../pages/ProfilePage';
import UsersPage from '../pages/UsersPage';
import GuestGuard from '../components/Guards/GuestGuard';
import UserGuard from '../components/Guards/UserGaurd';
import AdminGuard from '../components/Guards/AdminGuard';
import NotFound from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import HomeContent from '../components/HomeContent';

export const routes = (role) => [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignupPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.HOME,
    element: (
      <UserGuard>
        <HomePage />
      </UserGuard>
    ),
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      {
        path: PATHS.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: PATHS.USERS,
        element: (
          <AdminGuard>
            <UsersPage />
          </AdminGuard>
        ),
      },
    ],
  },
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];
