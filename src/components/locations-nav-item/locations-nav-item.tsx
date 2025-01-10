import { MouseEvent } from 'react';

type LocationNavItemProps = {
  children: string;
  onCityChange: (evt: MouseEvent<HTMLAnchorElement>) => void;
  active?: true;
};

export default function LocationNavItem({
  children,
  active,
  onCityChange,
}: LocationNavItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${
          active ? 'tabs__item--active' : ''
        }`}
        href="#"
        onClick={onCityChange}
      >
        <span>{children}</span>
      </a>
    </li>
  );
}
