import { Link } from 'react-router-dom';
import { HeaderProps } from '../header/header';

export default function UserNav({ logged }: HeaderProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {logged && (
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                Oliver.conner@gmail.com
              </span>
              <span className="header__favorite-count">3</span>
            </a>
          </li>
        )}
        <li className="header__nav-item">
          <Link className="header__nav-link" to={logged ? '#' : '/login'}>
            <span className="header__signout">
              {logged ? 'Sign out' : 'Sign in'}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
