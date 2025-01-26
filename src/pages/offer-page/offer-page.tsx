import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OfferGalleryItem from '../../components/offer-gallery-item/offer-gallery-item';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferGoods from '../../components/offer-goods/offer-goods';
import OfferHostAvatar from '../../components/offer-host-avatar/offer-host-avatar';
import OfferHost from '../../components/offer-host/offer-host';
import OfferNearPlaces from '../../components/offer-near-places/offer-near-places';
import OfferPresentation from '../../components/offer-presentation/offer-presentation';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import { AppRoute, MAX_OFFER_IMAGES } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  fetchFullOfferDataAction,
  fetchNearOffersAction,
  fetchReviewsAction,
} from '../../store/api-actions';
import { dropLoadingError } from '../../store/offer-process/offer-process';
import {
  getFullOfferData,
  getIsFullOfferLoadingError,
} from '../../store/offer-process/offer-selectors';

export default function OfferPage(): JSX.Element {
  const offer = useAppSelector(getFullOfferData);
  const isFullOfferLoadingError = useAppSelector(getIsFullOfferLoadingError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isNeedUpdate = id && offer.id !== id;

  useEffect(() => {
    if (isNeedUpdate) {
      if (isFullOfferLoadingError) {
        navigate(AppRoute.Empty);
        setTimeout(() => {
          dispatch(dropLoadingError());
        }, 100);
        return;
      }
      dispatch(fetchFullOfferDataAction(id)).then((response) => {
        if (response.meta.requestStatus === 'rejected') {
          return () => {
            navigate(AppRoute.Empty);
          };
        }
        dispatch(fetchReviewsAction(id));
        dispatch(fetchNearOffersAction(id));
      });
    }
  }, [id, dispatch, offer, isFullOfferLoadingError, navigate, isNeedUpdate]);

  const { title, host, description, goods, images } = offer;

  const getPhotos = () =>
    images
      .slice(0, MAX_OFFER_IMAGES)
      .map((image) => (
        <OfferGalleryItem key={image} image={image} title={title} />
      ));

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <Header enableUserNav />
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
              <OfferReviews />
            </div>
          </div>
          <Map currentOffer={offer} />
        </section>
        <OfferNearPlaces />
      </main>
    </div>
  );
}
