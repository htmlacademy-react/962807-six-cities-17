type OfferHostProps = {
  children: JSX.Element[];
};

export default function OfferHost({ children }: OfferHostProps): JSX.Element {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      {children}
    </div>
  );
}
