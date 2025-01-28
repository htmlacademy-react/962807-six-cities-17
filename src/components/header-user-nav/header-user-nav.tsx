import { Link } from 'react-router-dom';
import { AppRoute, AuthenticationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { logoutAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/card-process/card-selectors';
import {
  getAuthenticationStatus,
  getUserData,
} from '../../store/user-process/user-selectors';

export default function UserNav(): JSX.Element {
  const user = useAppSelector(getUserData);
  const isLogged =
    useAppSelector(getAuthenticationStatus) === AuthenticationStatus.Auth;
  const favoriteOffersCount = useAppSelector(getFavoriteOffers).length;
  const dispatch = useAppDispatch();
  const handleNavLink = () => {
    if (isLogged) {
      dispatch(logoutAction());
    }
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={isLogged ? AppRoute.Favorites : AppRoute.Login}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              { isLogged && user ? user.email : 'Sign in'}
            </span>
            {isLogged && (
              <span className="header__favorite-count">
                {favoriteOffersCount}
              </span>
            )}
          </Link>
        </li>
        {isLogged ? (
          <li className="header__nav-item">
            <a className="header__nav-link" onClick={handleNavLink}>
              <span className={isLogged ? 'header__signout' : 'header__login'}>
                Sign out
              </span>
            </a>
          </li>
        ) : ''}
      </ul>
    </nav>
  );
}
