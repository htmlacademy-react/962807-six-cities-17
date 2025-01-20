import { User } from '../../types';

export default function OfferReviewsItemUser({
  avatarUrl,
  name,
}: User): JSX.Element {
  return (
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={avatarUrl}
          width={54}
          height={54}
          alt={`${name} avatar`}
        />
      </div>
      <span className="reviews__user-name">{name}</span>
    </div>
  );
}
