export default function OfferReviewsItemUser(): JSX.Element {
  return (
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src="img/avatar-max.jpg"
          width={54}
          height={54}
          alt="Reviews avatar"
        />
      </div>
      <span className="reviews__user-name">Max</span>
    </div>
  );
}
