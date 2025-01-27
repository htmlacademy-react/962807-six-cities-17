import { Navigate } from 'react-router-dom';
import { AppRoute, AuthenticationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getAuthenticationStatus } from '../../store/user-process/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isLogged =
    useAppSelector(getAuthenticationStatus) === AuthenticationStatus.Auth;
  return isLogged ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
