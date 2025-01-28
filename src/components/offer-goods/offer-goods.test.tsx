import { render, screen } from '@testing-library/react';
import OfferGoods from './offer-goods';

describe('Component: OfferGoods', () => {
  it('should render correct', () => {
    const mockGoods = ['item1', 'item2'];
    const expectedText = /What's inside/;
    render(<OfferGoods goods={mockGoods} />);
    expect(screen.getByText(mockGoods[1])).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
