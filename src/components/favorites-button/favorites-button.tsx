import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthenticationStatus, BookmarkHeightOption, BookmarkWidthOption } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { pushFavoriteStatus } from '../../store/api-actions';
import { getAuthenticationStatus } from '../../store/user-process/user-selectors';

type FavoriteButtonProps = {
  offerId: string;
  isOfferBookmark: boolean;
};

export default function FavoritesButton({
  offerId,
  isOfferBookmark,
}: FavoriteButtonProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLogged =
    useAppSelector(getAuthenticationStatus) === AuthenticationStatus.Auth;
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
        width={isOfferBookmark ? BookmarkWidthOption.Offer : BookmarkWidthOption.NonOffer}
        height={isOfferBookmark ? BookmarkHeightOption.Offer : BookmarkHeightOption.NonOffer}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">
        {isFavorite && isLogged ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
