import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeActiveCard } from '../../store/card-process/card-process';
import { Offer } from '../../types';
import { CardType } from '../../const';

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
  isFavorite,
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
            width={cardType === 'favorites' ? 150 : 260}
            height={cardType === 'favorites' ? 110 : 200}
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
