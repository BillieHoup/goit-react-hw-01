import css from './FriendList/FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div>
    <li className={css.item} key={id}>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
{isOnline ? <span className={css.online}>Online</span> : <span className={css.offline}>Offline</span>}
    </li>
    </div>
  );
};