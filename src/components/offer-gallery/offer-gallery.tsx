type OfferGalleryProps = {
  children: JSX.Element[];
};

export default function OfferGallery({
  children,
}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery" data-testid="offerGalleryElement">
        {children}
      </div>
    </div>
  );
}
