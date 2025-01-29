import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CardImageHeightOption, CardImageWidthOption, CardType } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeActiveCard } from '../../store/card-process/card-process';
import { Offer } from '../../types';
import { getRatingStarStyle, toUpperCaseFirstLetter } from '../../utils/utils';
import FavoritesButton from '../favorites-button/favorites-button';

type CitiesPlacesItemProps = {
  cardType: string;
} & Offer;

export default function PlacesCard({
  id,
  title,
  type,
  price,
  rating,
  previewImage,
  isPremium,
  cardType = CardType.Main,
}: CitiesPlacesItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const onCardMouseEnter = useCallback(
    () => dispatch(changeActiveCard(id)),
    [id, dispatch]
  );
  const onCardMouseLeave = useCallback(
    () => dispatch(changeActiveCard(null)),
    [dispatch]
  );

  return (
    <article
      className={`${cardType}__card place-card`}
      key={id}
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardType === 'favorites' ? CardImageWidthOption.Favorites : CardImageWidthOption.NonFavorites}
            height={cardType === 'favorites' ? CardImageHeightOption.Favorites : CardImageHeightOption.NonFavorites}
            alt={`${title} ${type} image`}
          />
        </Link>
      </div>
      <div
        className={`${
          cardType === 'favorites' ? 'favorites__card-info' : ''
        } place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton offerId={id} isOfferBookmark={false} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: getRatingStarStyle(rating),
              }}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{toUpperCaseFirstLetter(type)}</p>
      </div>
    </article>
  );
}
