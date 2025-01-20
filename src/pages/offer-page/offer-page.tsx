import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CitiesPlacesItem from '../../components/cities-places-item/cities-places-item';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OfferGalleryItem from '../../components/offer-gallery-item/offer-gallery-item';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferGoods from '../../components/offer-goods/offer-goods';
import OfferHostAvatar from '../../components/offer-host-avatar/offer-host-avatar';
import OfferHost from '../../components/offer-host/offer-host';
import OfferNearPlaces from '../../components/offer-near-places/offer-near-places';
import OfferPresentation from '../../components/offer-presentation/offer-presentation';
import OfferReviewsItem from '../../components/offer-reviews-item/offer-reviews-item';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import { useAppDispatch } from '../../hooks/useDispatch/useAppDispatch';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';
import {
  fetchFullOfferDataAction,
  fetchNearOffersAction,
  fetchReviewsAction,
} from '../../store/api-actions';
import LoadingPage from '../loading-page/loading-page';
import { Helmet } from 'react-helmet-async';

type OfferPageProps = {
  logged: boolean;
};
export default function OfferPage({ logged }: OfferPageProps): JSX.Element {
  const isLoading = useAppSelector((state) => state.isOffersLoading);
  const offer = useAppSelector((state) => state.offer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const dispatch = useAppDispatch();

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const offerId = useParams().id;
  useEffect(() => {
    if (offerId && (!offer || offer.id !== offerId)) {
      dispatch(fetchFullOfferDataAction(offerId));
      dispatch(fetchNearOffersAction(offerId));
      dispatch(fetchReviewsAction(offerId));
    }
  }, [offerId, offer, dispatch]);

  if (isLoading || !offer.id) {
    return <LoadingPage />;
  }

  const { title, host, description, goods, images } = offer;

  const getPhotos = function (): JSX.Element[] {
    return images.map((image) => (
      <OfferGalleryItem key={image} image={image} title={title} />
    ));
  };

  const getReviews = function (): JSX.Element[] {
    return reviews.map((reviewItem) => (
      <OfferReviewsItem {...reviewItem} key={reviewItem.id} />
    ));
  };
  const getNearOffers = function (): JSX.Element[] {
    return nearOffers
      .slice(0, 3)
      .map((offerItem) => (
        <CitiesPlacesItem
          isMainCardType={false}
          key={offerItem.id}
          onCardHover={setActiveCard}
          {...offerItem}
        />
      ));
  };

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <Header logged={logged} enableUserNav />
      <main className="page__main page__main--offer">
        <section className="offer">
          {images.length && <OfferGallery>{getPhotos()}</OfferGallery>}
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferPresentation {...offer} />
              {goods.length && <OfferGoods goods={goods} />}
              <OfferHost>
                <OfferHostAvatar {...host} />
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </OfferHost>
              <OfferReviews logged={logged}>{getReviews()}</OfferReviews>
            </div>
          </div>
          <Map selectedOffer={activeCard} styleModifier="offer" />
        </section>
        <OfferNearPlaces data-active-card={activeCard}>
          {getNearOffers()}
        </OfferNearPlaces>
      </main>
    </div>
  );
}
