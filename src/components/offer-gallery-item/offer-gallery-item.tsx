export type OfferGalleryItemProps = {
  image: string;
  title: string;
};

export default function OfferGalleryItem({
  image,
  title,
}: OfferGalleryItemProps) {
  return (
    <div className="offer__image-wrapper" key={image}>
      <img className="offer__image" src={image} alt={`Photo ${title}`} />
    </div>
  );
}
