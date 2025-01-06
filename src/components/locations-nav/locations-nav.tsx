import LocationNavItem from '../locations-nav-item/locations-nav-item';

export default function LocationNav(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <LocationNavItem>Paris</LocationNavItem>
          <LocationNavItem>Cologne</LocationNavItem>
          <LocationNavItem>Brussels</LocationNavItem>
          <LocationNavItem active>Amsterdam</LocationNavItem>
          <LocationNavItem>Hamburg</LocationNavItem>
          <LocationNavItem>Dusseldorf</LocationNavItem>
        </ul>
      </section>
    </div>
  );
}
