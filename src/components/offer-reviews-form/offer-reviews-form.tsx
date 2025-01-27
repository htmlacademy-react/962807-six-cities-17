import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { MINIMUM_REVIEW_LENGTH, RATING_GRADES } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { postReviewAction } from '../../store/api-actions';
import { getFullOfferData } from '../../store/offer-process/offer-selectors';
import React from 'react';

export default function OfferReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = useAppSelector(getFullOfferData).id;
  const toastIds = React.useRef(['lengthToast', 'ratingToast']);

  const initialState = {
    rating: 0,
    review: '',
    disable: false,
  };
  const [reviewForm, setReviewForm] = useState(initialState);

  const onReviewChange: React.FormEventHandler = (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (reviewForm.disable) {
      return;
    }
    const { name, value } = evt.target;

    setReviewForm({
      ...reviewForm,
      [name]: name === 'rating' ? Number(value) : value,
    });
  };

  const checkReviewForm = () => {
    const isLengthCorrect = reviewForm.review.length > MINIMUM_REVIEW_LENGTH;
    if (!isLengthCorrect) {
      toast.info('Please write for review at least 50 characters', {
        toastId: toastIds.current[0],
      });
      return isLengthCorrect;
    }
    const isRatingChecked = reviewForm.rating;
    if (!isRatingChecked) {
      toast.info(
        'To post review you need evaluate place by rating from 1 to 5',
        {
          toastId: toastIds.current[1],
        }
      );
    }
    return isLengthCorrect && isRatingChecked;
  };

  const onSubmit: React.FormEventHandler = (evt) => {
    evt.preventDefault();
    if (!checkReviewForm()) {
      return;
    }
    toast.dismiss();
    reviewForm.disable = true;

    dispatch(
      postReviewAction({
        comment: reviewForm.review,
        rating: reviewForm.rating,
        id: offerId,
      })
    ).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        setReviewForm(initialState);
      } else {
        setReviewForm({ ...reviewForm, disable: false });
      }
    });
  };
  const getRatingStarts = () =>
    RATING_GRADES.map((grade, index, grades) => (
      <Fragment key={String(grades.length - index)}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={grades.length - index}
          id={`${grades.length - index}-stars`}
          type="radio"
          checked={reviewForm.rating === grades.length - index}
          disabled={reviewForm.disable}
          onChange={onReviewChange}
        />
        <label
          htmlFor={`${grades.length - index}-stars`}
          className="reviews__rating-label form__rating-label"
          title={grade}
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </Fragment>
    ));

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {getRatingStarts()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewForm.review}
        disabled={reviewForm.disable}
        onChange={onReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={reviewForm.disable}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
