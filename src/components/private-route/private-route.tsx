import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthStatus } from '../../store/user-process/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isLogged = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  return isLogged ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
