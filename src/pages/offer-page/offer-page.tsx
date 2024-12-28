import { useParams } from 'react-router-dom';
import { AppProps } from '../../components/app/app';
import CitiesPlacesItem from '../../components/cities-places-item/cities-places-item';
import Header from '../../components/header/header';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferGalleryItem from '../../components/offer-gallery-item/offer-gallery-item';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferHostAvatar from '../../components/offer-host-avatar/offer-host-avatar';
import OfferHostDescription from '../../components/offer-host-description/offer-host-description';
import OfferHost from '../../components/offer-host/offer-host';
import OfferMap from '../../components/offer-map/offer-map';
import OfferNearPlaces from '../../components/offer-near-places/offer-near-places';
import OfferPresentation from '../../components/offer-presentation/offer-presentation';
import OfferReviewsItem from '../../components/offer-reviews-item/offer-reviews-item';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import { Offer, Offers } from '../../mocks/offers';

type OfferPageProps = Omit<AppProps, 'offersCount'>;
export default function OfferPage({
  logged,
  offers,
  reviews,
}: OfferPageProps): JSX.Element {
  const { id } = useParams();

  const offer = offers.find(
    (offerItem) => offerItem.id === Number(id)
  ) as Offer;
  const nearOffers = offers.filter(
    (offerItem) => offerItem.id !== Number(id)
  ) as Offers;
  const { title, imagesSrc, features, description, host } = offer;

  const getPhotos = function (): JSX.Element[] {
    return imagesSrc.map((imageItem) => (
      <OfferGalleryItem
        key={(Date.now() * Math.random()).toFixed(10)}
        id={Number(id)}
        image={imageItem}
        title={title}
      />
    ));
  };
  const getReviews = function (): JSX.Element[] {
    return reviews.map((reviewItem) => (
      <OfferReviewsItem
        {...reviewItem}
        key={(Date.now() * Math.random()).toFixed(10)}
      />
    ));
  };
  const getNearOffers = function (): JSX.Element[] {
    return nearOffers
      .slice(0, 3)
      .map((offerItem) => (
        <CitiesPlacesItem
          isMainCardType={false}
          key={offerItem.id}
          {...offerItem}
        />
      ));
  };
  return (
    <div className="page">
      <Header logged={logged} enableUserNav />
      <main className="page__main page__main--offer">
        <section className="offer">
          {imagesSrc.length && <OfferGallery>{getPhotos()}</OfferGallery>}
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferPresentation {...offer} />
              {features.length && <OfferFeatures features={features} />}
              <OfferHost>
                <OfferHostAvatar {...host} />
                <OfferHostDescription description={description} />
              </OfferHost>
              <OfferReviews logged={logged}>{getReviews()}</OfferReviews>
            </div>
          </div>
          <OfferMap />
        </section>
        <OfferNearPlaces>{getNearOffers()}</OfferNearPlaces>
      </main>
    </div>
  );
}
