import { Offer } from '../../mocks/offers';

type OfferFeaturesProps = Pick<Offer, 'features'>;

export default function OfferFeatures({
  features,
}: OfferFeaturesProps): JSX.Element {
  const getFeatures = () =>
    features.map((feature) => (
      <li
        className="offer__inside-item"
        key={(Date.now() * Math.random()).toFixed(10)}
      >
        {feature}
      </li>
    ));
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">{getFeatures()}</ul>
    </div>
  );
}
