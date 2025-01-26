import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { pushFavoriteStatus } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-process/user-selectors';

type FavoriteButtonProps = {
  offerId: string;
  isOfferBookmark: boolean;
};

export default function FavoriteButton({
  offerId,
  isOfferBookmark,
}: FavoriteButtonProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  const isFavorite = useAppSelector(
    (state) =>
      !!state.Cards.favoriteOffers.find((offer) => offer.id === offerId)
  );

  const classNamePrefix = isOfferBookmark ? 'offer' : 'place-card';
  return (
    <button
      type="button"
      className={`${classNamePrefix}__bookmark-button ${
        isFavorite && isLogged
          ? `${classNamePrefix}__bookmark-button--active`
          : ''
      } button`}
      onClick={() => {
        if (isLogged) {
          dispatch(
            pushFavoriteStatus({ id: offerId, isFavorite: !isFavorite })
          );
        } else {
          navigate(AppRoute.Login);
        }
      }}
    >
      <svg
        className={`${classNamePrefix}__bookmark-icon`}
        width={isOfferBookmark ? 31 : 18}
        height={isOfferBookmark ? 33 : 19}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">
        {isFavorite && isLogged ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}