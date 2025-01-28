import { render, screen } from '@testing-library/react';
import { makeFakeReview } from '../../utils/mocks';
import OfferReviewsItemUser from './offer-reviews-item-user';

describe('Component: OfferReviewsItemUser', () => {
  it('should render correct', () => {
    const mockReview = makeFakeReview();
    render(<OfferReviewsItemUser {...mockReview.user} />);

    expect(screen.getByText(mockReview.user.name)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
