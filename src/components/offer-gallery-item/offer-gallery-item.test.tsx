import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import OfferGalleryItem from './offer-gallery-item';

describe('Component: OfferGalleryItem', () => {
  it('should render correct', () => {
    render(
      <OfferGalleryItem
        image={faker.system.filePath()}
        title={faker.word.noun()}
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
