import { useState } from 'react';
import { SortingOption } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCurrentSort } from '../../store/card-process/card-selectors';
import { getRandomKey } from '../../utils/utils';
import { changeSort } from '../../store/card-process/card-process';

export default function PlacesSort(): JSX.Element {
  const currentSort = useAppSelector(getCurrentSort);
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const SortingOptionsNames = Object.values(SortingOption);

  const getSortItems = () =>
    SortingOptionsNames.map((sortItem) => (
      <li
        key={getRandomKey()}
        className={`places__option ${
          (sortItem as string) === currentSort ? 'places__option--active' : ''
        }`}
        tabIndex={0}
        onClick={() => {
          setIsOpened(false);
          dispatch(changeSort(sortItem));
        }}
      >
        {sortItem}
      </li>
    ));

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpened(!isOpened)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom places__options${
          isOpened ? '--opened' : ''
        }`}
        onMouseLeave={() => setIsOpened(false)}
      >
        {getSortItems()}
      </ul>
    </form>
  );
}
