import React from 'react';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getReviewsData } from '../../store/offer-process/offer-selectors';
import { getAuthStatus } from '../../store/user-process/user-selectors';
import { AuthStatus } from '../../const';

type OfferReviewsProps = {
  children: JSX.Element[];
};

export default function OfferReviews({
  children,
}: OfferReviewsProps): JSX.Element {
  const reviews = useAppSelector(getReviewsData);
  const isLogged = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">{children}</ul>
      {isLogged && <OfferReviewsForm />}
    </section>
  );
}
