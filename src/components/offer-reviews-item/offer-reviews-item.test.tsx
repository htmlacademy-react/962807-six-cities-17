import { render, screen } from '@testing-library/react';
import { makeFakeReview } from '../../utils/mocks';
import OfferReviewsItem from './offer-reviews-item';

describe('Component: OfferReviewsItem', () => {
  it('should render correct', () => {
    const mockReview = makeFakeReview();
    render(<OfferReviewsItem {...mockReview} />);

    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
