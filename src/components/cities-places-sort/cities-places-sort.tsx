import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch/useAppDispatch';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';
import { changeSort } from '../../store/action';
import { SortingOption } from '../../store/const';

export default function CitiesPlacesSort(): JSX.Element {
  const sort = useAppSelector((state) => state.sort);

  const dispatch = useAppDispatch();
  // dispatch(changeSort('sortType'))
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const getSortItems = function (): JSX.Element[] {
    return Object.values(SortingOption).map((sortItem) => (
      <li
        key={(Date.now() * Math.random()).toFixed(10)}
        // className="places__option"
        className={`places__option ${
          (sortItem as string) === sort ? 'places__option--active' : ''
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
        {sort}
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
