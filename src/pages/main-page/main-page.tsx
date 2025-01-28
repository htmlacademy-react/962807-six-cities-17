import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import PlacesEmpty from '../../components/places-empty/places-empty';
import PlacesFilled from '../../components/places-filled/places-filled';
import { useAppSelector } from '../../hooks/use-app-selector';
import {
  getIsOffersLoadingError,
  getOfferByCityQuantity,
} from '../../store/card-process/card-selectors';
import EmptyPage from '../empty-page/empty-page';

export default function MainPage(): JSX.Element {
  const offersQuantity = useAppSelector(getOfferByCityQuantity);
  const isOffersLoadingError = useAppSelector(getIsOffersLoadingError);
  if (isOffersLoadingError) {
    return <EmptyPage />;
  }
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header enableUserNav />
      {offersQuantity ? <PlacesFilled /> : <PlacesEmpty />}
    </div>
  );
}
