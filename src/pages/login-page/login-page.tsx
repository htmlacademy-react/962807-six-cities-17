import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import LoginLocation from '../../components/login-location/login-location';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getAuthenticationStatus } from '../../store/user-process/user-selectors';
import { AppRoute, AuthenticationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

export default function LoginPage(): JSX.Element {
  const isLogged =
    useAppSelector(getAuthenticationStatus) === AuthenticationStatus.Auth;
  if (isLogged) {
    return <Navigate to={AppRoute.Main} />;
  }
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <Header enableUserNav={false} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <LoginLocation />
        </div>
      </main>
    </div>
  );
}
