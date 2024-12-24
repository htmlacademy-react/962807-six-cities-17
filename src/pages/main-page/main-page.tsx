import CitiesPlacesItem from '../../components/cities-places-item/cities-places-item';
import CitiesPlacesMap from '../../components/cities-places-map/cities-places-map';
import CitiesPlaces from '../../components/cities-places/cities-places';
import UserNav from '../../components/header-user-nav/header-user-nav';
import Header from '../../components/header/header';
import LocationNavItem from '../../components/locations-nav-item/locations-nav-item';
import LocationNav from '../../components/locations-nav/locations-nav';

type MainPageProps = {
  offersCount: number;
};

export default function MainPage({ offersCount }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header>
        <UserNav />
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationNav>
          <LocationNavItem>Paris</LocationNavItem>
          <LocationNavItem>Cologne</LocationNavItem>
          <LocationNavItem>Brussels</LocationNavItem>
          <LocationNavItem active>Amsterdam</LocationNavItem>
          <LocationNavItem>Hamburg</LocationNavItem>
          <LocationNavItem>Dusseldorf</LocationNavItem>
        </LocationNav>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <CitiesPlaces offersCount={offersCount}>
                <CitiesPlacesItem
                  name="Beautiful &amp; luxurious apartment at great location"
                  type="Apartment"
                  premium
                  bookmarked
                  src="apartment-01"
                  price={120}
                  rating={80}
                />
                <CitiesPlacesItem
                  name="Beautiful &amp; luxurious apartment at great location"
                  type="Apartment"
                  premium
                  bookmarked
                  src="apartment-01"
                  price={120}
                  rating={80}
                />
                <CitiesPlacesItem
                  name="Beautiful &amp; luxurious apartment at great location"
                  type="Apartment"
                  premium
                  bookmarked
                  src="apartment-01"
                  price={120}
                  rating={80}
                />
                <CitiesPlacesItem
                  name="Beautiful &amp; luxurious apartment at great location"
                  type="Apartment"
                  premium
                  bookmarked
                  src="apartment-01"
                  price={120}
                  rating={80}
                />
                <CitiesPlacesItem
                  name="Beautiful &amp; luxurious apartment at great location"
                  type="Apartment"
                  premium
                  bookmarked
                  src="apartment-01"
                  price={120}
                  rating={80}
                />
              </CitiesPlaces>
            </section>
            <CitiesPlacesMap />
          </div>
        </div>
      </main>
    </div>
  );
}
