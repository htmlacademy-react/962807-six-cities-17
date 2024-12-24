type LocationNavItemProps = {
  children: string;
  active?: true;
};

export default function LocationNavItem({
  children,
  active,
}: LocationNavItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${
          active ? 'tabs__item--active' : ''
        }`}
        href="#"
      >
        <span>{children}</span>
      </a>
    </li>
  );
}
