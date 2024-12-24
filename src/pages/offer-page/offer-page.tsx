import UserNav from '../../components/header-user-nav/header-user-nav';
import Header from '../../components/header/header';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferHostAvatar from '../../components/offer-host-avatar/offer-host-avatar';
import OfferHostDescription from '../../components/offer-host-description/offer-host-description';
import OfferHost from '../../components/offer-host/offer-host';
import OfferMap from '../../components/offer-map/offer-map';
import OfferNearPlaces from '../../components/offer-near-places/offer-near-places';
import OfferPresentation from '../../components/offer-presentation/offer-presentation';
import OfferReviewsForm from '../../components/offer-reviews-form/offer-reviews-form';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
type OfferPageProps = {
  logged?: true;
};

export default function OfferPage({ logged }: OfferPageProps): JSX.Element {
  return (
    <div className="page">
      <Header>{logged && <UserNav />}</Header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferPresentation />
              <OfferFeatures />
              <OfferHost>
                <OfferHostAvatar />
                <OfferHostDescription />
              </OfferHost>
              <OfferReviews>{logged && <OfferReviewsForm />}</OfferReviews>
            </div>
          </div>
          <OfferMap />
        </section>
        <OfferNearPlaces />
      </main>
    </div>
  );
}
