import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
  logged: boolean;
  children: JSX.Element;
};

function PrivateRoute({ logged, children }: PrivateRouteProps): JSX.Element {
  return logged ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
