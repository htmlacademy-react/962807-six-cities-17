import { Offer } from '../../mocks/offers';

export type OfferGalleryItemProps = Pick<Offer, 'title' | 'id'> & {
  image: string;
};

export default function OfferGalleryItem({
  id,
  image,
  title,
}: OfferGalleryItemProps) {
  return (
    <div className="offer__image-wrapper" key={String(id)}>
      <img
        className="offer__image"
        src={`img/${image}`}
        alt={`Photo ${title}`}
      />
    </div>
  );
}
