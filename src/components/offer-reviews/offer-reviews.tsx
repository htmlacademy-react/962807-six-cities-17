import React from 'react';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';
import { getReviewsData } from '../../store/offer-process/offer-selectors';

type OfferReviewsProps = {
  children: JSX.Element[];
  logged: boolean;
};

export default function OfferReviews({
  children,
  logged,
}: OfferReviewsProps): JSX.Element {
  const reviews = useAppSelector(getReviewsData);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">{children}</ul>
      {logged && <OfferReviewsForm />}
    </section>
  );
}
