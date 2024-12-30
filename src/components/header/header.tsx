import { Link } from 'react-router-dom';
import UserNav from '../header-user-nav/header-user-nav';
export type HeaderProps = {
  logged: boolean;
  enableUserNav: boolean;
};

export default function Header({
  logged,
  enableUserNav,
}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to="/"
              className="header__logo-link header__logo-link--active"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          {enableUserNav && <UserNav logged={logged} />}
        </div>
      </div>
    </header>
  );
}
