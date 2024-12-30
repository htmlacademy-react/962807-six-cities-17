import { Reviewer } from '../../mocks/reviews';

export default function OfferReviewsItemUser(reviewer: Reviewer): JSX.Element {
  const { name, avatarSrc } = reviewer;
  return (
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={`img/${avatarSrc}`}
          width={54}
          height={54}
          alt={`${name} avatar`}
        />
      </div>
      <span className="reviews__user-name">{name}</span>
    </div>
  );
}
