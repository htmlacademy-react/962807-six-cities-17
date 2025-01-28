import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import OfferHostAvatar from './offer-host-avatar';

describe('Component: OfferHostAvatar', () => {
  it('should render correct', () => {
    const expectedText = 'Pro';

    render(
      <OfferHostAvatar
        avatarUrl={faker.system.filePath()}
        isPro
        name={faker.person.firstName()}
      />
    );
    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
