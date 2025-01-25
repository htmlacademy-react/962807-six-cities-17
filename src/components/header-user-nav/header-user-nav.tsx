import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logoutAction } from '../../store/api-actions';
import {
  getAuthStatus,
  getUserData,
} from '../../store/user-process/user-selectors';

export default function UserNav(): JSX.Element {
  const user = useAppSelector(getUserData);
  const isLogged = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleNavLink = () => {
    if (isLogged) {
      dispatch(logoutAction());
      navigate(-1);
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isLogged && (
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Favorites}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                {user ? user.name : ''}
              </span>
              <span className="header__favorite-count">3</span>
            </Link>
          </li>
        )}
        <li className="header__nav-item">
          <a className="header__nav-link" onClick={handleNavLink}>
            <span className="header__signout">
              {isLogged ? 'Sign out' : 'Sign in'}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
