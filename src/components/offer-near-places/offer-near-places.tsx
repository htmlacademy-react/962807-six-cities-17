type OfferNearPlaces = {
  children: JSX.Element[];
};
export default function OfferNearPlaces({
  children,
}: OfferNearPlaces): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">{children}</div>
      </section>
    </div>
  );
}
