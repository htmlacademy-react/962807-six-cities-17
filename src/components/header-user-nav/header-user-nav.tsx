import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthenticationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { logoutAction } from '../../store/api-actions';
import {
  getAuthenticationStatus,
  getUserData,
} from '../../store/user-process/user-selectors';
import { getFavoriteOffers } from '../../store/card-process/card-selectors';

export default function UserNav(): JSX.Element {
  const user = useAppSelector(getUserData);
  const isLogged =
    useAppSelector(getAuthenticationStatus) === AuthenticationStatus.Auth;
  const favoriteOffersCount = useAppSelector(getFavoriteOffers).length;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleNavLink = () => {
    if (isLogged) {
      dispatch(logoutAction());
    } else {
      navigate(AppRoute.Login);
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
              {user ? user.name : ''}
            </span>
            {isLogged && (
              <span className="header__favorite-count">
                {favoriteOffersCount}
              </span>
            )}
          </Link>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" onClick={handleNavLink}>
            <span className={isLogged ? 'header__signout' : 'header__login'}>
              {isLogged ? 'Sign out' : 'Sign in'}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
