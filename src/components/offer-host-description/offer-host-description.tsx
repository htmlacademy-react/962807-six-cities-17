import { Offer } from '../../mocks/offers';
type OfferHostDescriptionProps = Pick<Offer, 'description'>;

export default function OfferHostDescription({
  description,
}: OfferHostDescriptionProps): JSX.Element {
  const getDescription = () =>
    description.map((descriptionItem) => (
      <p className="offer__text" key={(Date.now() * Math.random()).toFixed(10)}>
        {descriptionItem}
      </p>
    ));
  return <div className="offer__description">{getDescription()}</div>;
}
