type LocationNavProps = {
  children?: JSX.Element[] | JSX.Element;
};

export default function LocationNav({
  children,
}: LocationNavProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">{children}</ul>
      </section>
    </div>
  );
}
