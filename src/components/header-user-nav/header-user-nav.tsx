import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useDispatch/useAppDispatch';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';
import { logoutAction } from '../../store/api-actions';

export type UserNavProps = {
  logged: boolean;
};

export default function UserNav({ logged }: UserNavProps): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavLink = () => {
    if (logged) {
      dispatch(logoutAction());
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {logged && (
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Favorites}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">{user}</span>
              <span className="header__favorite-count">3</span>
            </Link>
          </li>
        )}
        <li className="header__nav-item">
          <a className="header__nav-link" onClick={handleNavLink}>
            <span className="header__signout">
              {logged ? 'Sign out' : 'Sign in'}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
