type OfferGoodsProps = {
  goods: string[];
};

export default function OfferGoods({ goods }: OfferGoodsProps): JSX.Element {
  const getFeatures = () =>
    goods.map((item) => (
      <li className="offer__inside-item" key={item}>
        {item}
      </li>
    ));
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">{getFeatures()}</ul>
    </div>
  );
}
