// import { useNavigate } from 'react-router-dom';
// import { AppRoute } from '../../const';
// import { useDispatch } from 'react-redux';
// import { useAppSelector } from '../../hooks/useAppSelector';
// import { getAuthStatus } from '../../store/user-process/user-selectors';

// export default function FavoriteButton({
//   className,
//   offerId,
// }: FavoriteButtonProps) {
//   const imgWidth = className === OFFER_CLASS_NAME ? 33 : 18;
//   const imgHeight = className === OFFER_CLASS_NAME ? 33 : 19;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isAuthorized = useAppSelector(getAuthStatus);
//   const isFavorite = useAppSelector((state) =>
//     getFavoriteByOfferId(state, oferId)
//   );

//   return (
//     <button
//       className={`${className}__bookmark-button ${
//         isFavorite && isAuthorized
//           ? `${className}__bookmark-button--active`
//           : ''
//       } button`}
//       type="button"
//       onClick={() => {
//         if (isAuthorized) {
//           dispatch(uploadFavoriteStatus({ offerId, wasFavorit: isFavorite }));
//         } else {
//           navigate(AppRoute.Login);
//         }
//       }}
//     >
//       <svg
//         className={`${className}__bookmark-icon`}
//         width={imgWidth}
//         height={imgHeight}
//       >
//         <use xlinkHref="#icon-bookmark" />
//       </svg>
//       <span className="visually-hidden">
//         {isFavorite && isAuthorized ? 'In bookmarks' : 'To boo'}
//       </span>
//     </button>
//   );
// }
