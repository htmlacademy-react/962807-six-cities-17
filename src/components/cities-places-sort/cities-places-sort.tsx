import { useState } from 'react';
import { SortingOption } from '../../const';
import { useAppDispatch } from '../../hooks/useDispatch/useAppDispatch';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';
import { getCurrentSort } from '../../store/card-process/card-selectors';
import { getRandomKey } from '../../utils/utils';
import { changeSort } from '../../store/card-process/card-process';

export default function CitiesPlacesSort(): JSX.Element {
  const CurrentSort = useAppSelector(getCurrentSort);

  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const getSortItems = function (): JSX.Element[] {
    return Object.values(SortingOption).map((sortItem) => (
      <li
        key={getRandomKey()}
        className={`places__option ${
          (sortItem as string) === CurrentSort ? 'places__option--active' : ''
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
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpened(!isOpened)}
      >
        {CurrentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom places__options${
          isOpened ? '--opened' : ''
        }`}
      >
        {getSortItems()}
      </ul>
    </form>
  );
}
