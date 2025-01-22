import { Link } from 'react-router-dom';
import { Offer } from '../../types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeActiveCard } from '../../store/card-process/card-process';
import { useCallback } from 'react';

type CitiesPlacesItemProps = {
  isMainCardType: boolean;
} & Offer;

export default function PlacesCard({
  id,
  title,
  type,
  price,
  rating,
  previewImage,
  isPremium,
  isFavorite,
  isMainCardType,
}: CitiesPlacesItemProps): JSX.Element {
  const getPrefixByCardType = (): string =>
    isMainCardType ? 'cities__' : 'near-places__';

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
      className={`${getPrefixByCardType()}card place-card`}
      key={id}
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${getPrefixByCardType()}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={`${title} ${type} image`}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">/night</span>
          </div>
          <button
            className={`place-card__bookmark-button${
              isFavorite ? '--active' : ''
            } button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${(100 / 5) * Math.round(rating)}%`,
              }}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
