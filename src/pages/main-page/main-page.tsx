import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import PlacesEmpty from '../../components/places-empty/places-empty';
import PlacesFilled from '../../components/places-filled/places-filled';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getOfferByCityQuantity } from '../../store/card-process/card-selectors';

// export type MainPageProps = {
//   citiesNames: string[];
// };

export default function MainPage(): JSX.Element {
  const offersQuantity = useAppSelector(getOfferByCityQuantity);

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

// <main
//   className={`page__main page__main--index ${
//     isEmpty() ? 'page__main--index-empty' : ''
//   }`}
// >
//   <h1 className="visually-hidden">Cities</h1>
//   <LocationNav citiesNames={citiesNames} />

//   <div className="cities">
//     <div
//       className={`cities__places-container container ${
//         isEmpty() ? 'cities__places-container--empty' : ''
//       }`}
//     >
//       <section
//         className={
//           isEmpty() ? 'cities__no-places' : 'cities__places places'
//         }
//       >
//         {isEmpty() ? <PlacesCardsEmpty /> : <PlacesCardsFilled />}
//       </section>
//       {isEmpty() ? (
//         <div className="cities__right-section" />
//       ) : (
//         <div className="cities__right-section">
//           <Map styleModifier="cities" />
//         </div>
//       )}
//     </div>
//   </div>
// </main>
