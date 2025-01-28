import { render, screen } from '@testing-library/react';
import { makeFakeReview } from '../../utils/mocks';
import OfferReviewsItemInfo from './offer-reviews-item-info';

describe('Component: OfferReviewsItemInfo', () => {
  it('should render correct', () => {
    const mockReview = makeFakeReview();
    render(<OfferReviewsItemInfo {...mockReview} />);

    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
  });
});
