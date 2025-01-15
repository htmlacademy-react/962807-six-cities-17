import { Host } from '../../types';

export default function OfferHostAvatar({
  name,
  isPro,
  avatarUrl,
}: Host): JSX.Element {
  return (
    <div className="offer__host-user user">
      <div
        className={`offer__avatar-wrapper offer__avatar-wrapper${
          isPro ? '--pro' : ''
        } user__avatar-wrapper`}
      >
        <img
          className="offer__avatar user__avatar"
          src={avatarUrl}
          width={74}
          height={74}
          alt={`${name} avatar`}
        />
      </div>
      <span className="offer__user-name">{name}</span>
      {isPro && <span className="offer__user-status">Pro</span>}
    </div>
  );
}
