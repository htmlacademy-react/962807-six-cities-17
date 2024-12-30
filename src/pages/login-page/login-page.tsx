import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import LoginLocation from '../../components/login-location/login-location';

export default function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header enableUserNav={false} logged={false} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <LoginLocation />
        </div>
      </main>
    </div>
  );
}
