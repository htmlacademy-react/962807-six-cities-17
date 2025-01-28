import { CardType } from '../../const';
import { Offers } from '../../types';
import PlacesCard from '../places-card/places-card';

type PlacesCardListProps = {
  offers: Offers;
  cardType: CardType;
};

export default function PlacesCardList({
  offers,
  cardType,
}: PlacesCardListProps): JSX.Element {
  return (
    <>
      {offers.map((offerItem) => (
        <PlacesCard
          cardType={cardType}
          key={offerItem.id}
          {...offerItem}
          data-testId="PlacesCard"
        />
      ))}
    </>
  );
}
