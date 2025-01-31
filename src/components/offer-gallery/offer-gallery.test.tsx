import { render, screen } from '@testing-library/react';
import { MockComponent } from '../../utils/mock-components';
import OfferGallery from './offer-gallery';

describe('Component: OfferGallery', () => {
  it('should render correct', () => {
    const childComponent = MockComponent();
    const expectedText = 'mockComponent';
    const offerGalleryId = 'offerGalleryElement';

    render(<OfferGallery>{[childComponent]}</OfferGallery>);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId(offerGalleryId)).toBeInTheDocument();
  });
});
