import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
import {
  getFullOfferData,
  getIsFullOfferLoadingError,
  getNearOffersData,
  getReviewsData,
} from '../../store/offer-process/offer-selectors';

type OfferPageProps = {
  logged: boolean;
};
export default function OfferPage({ logged }: OfferPageProps): JSX.Element {
  const offer = useAppSelector(getFullOfferData);
  const reviews = useAppSelector(getReviewsData);
  const nearOffers = useAppSelector(getNearOffersData);
  const isFullOfferLoadingError = useAppSelector(getIsFullOfferLoadingError);
  const dispatch = useAppDispatch();

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const offerId = useParams().id;

  useEffect(() => {
    if (offerId && offer.id !== offerId) {
      dispatch(fetchFullOfferDataAction(offerId)).then((response) => {
        if (response.meta.requestStatus === 'rejected') {
          return;
        }
        dispatch(fetchReviewsAction(offerId));
        dispatch(fetchNearOffersAction(offerId));
      });
    }
  }, [offerId, dispatch, offer, isFullOfferLoadingError]);

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
