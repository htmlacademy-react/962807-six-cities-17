import { Link } from 'react-router-dom';

type CitiesPlacesItemProps = {
  name: string;
  type: string;
  price: number;
  rating: number;
  src: string;
  premium?: true;
  bookmarked?: true;
  id?: string;
};

export default function CitiesPlacesItem({
  id = '',
  name,
  type,
  price,
  rating,
  src,
  premium,
  bookmarked,
}: CitiesPlacesItemProps): JSX.Element {
  return (
    <article className="cities__card place-card" key={id}>
      <div className="place-card__mark">{premium && <span>Premium</span>}</div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="offer">
          <img
            className="place-card__image"
            src={`img/${src}.jpg`}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button${
              bookmarked ? '--active' : ''
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
                width: `${rating}%`,
              }}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
