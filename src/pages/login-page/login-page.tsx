import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import LoginLocation from '../../components/login-location/login-location';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthStatus } from '../../store/user-process/user-selectors';
import { AppRoute, AuthStatus } from '../../const';
import { Navigate } from 'react-router-dom';

export default function LoginPage(): JSX.Element {
  const isLogged = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  if (isLogged) {
    return <Navigate to={AppRoute.Favorites} />;
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
