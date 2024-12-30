import React from 'react';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import { AppProps } from '../app/app';

type OfferReviewsProps = {
  children: JSX.Element[];
} & Pick<AppProps, 'logged'>;

export default function OfferReviews({
  children,
  logged,
}: OfferReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·{' '}
        <span className="reviews__amount">
          {React.Children.count(children)}
        </span>
      </h2>
      <ul className="reviews__list">{children}</ul>
      {logged && <OfferReviewsForm />}
    </section>
  );
}
