import { render, screen } from '@testing-library/react';
import { MockComponent } from '../../utils/mocks';
import OfferHost from './offer-host';

describe('Component: OfferHost', () => {
  it('should render correct', () => {
    const MockComponentId = 'mockComponent';
    const expectedText = 'Meet the host';

    render(<OfferHost>{[MockComponent()]}</OfferHost>);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId(MockComponentId)).toBeInTheDocument();
  });
});
