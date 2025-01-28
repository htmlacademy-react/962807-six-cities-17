import { MouseEvent } from 'react';

type LocationNavItemProps = {
  children: string;
  handleCityChange: (evt: MouseEvent<HTMLAnchorElement>) => void;
  active?: true;
};

export default function LocationNavItem({
  children,
  active,
  handleCityChange,
}: LocationNavItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${
          active ? 'tabs__item--active' : ''
        }`}
        href="#"
        onClick={handleCityChange}
      >
        <span>{children}</span>
      </a>
    </li>
  );
}
