import css from './FriendList.module.css';
import {FriendListItem} from '../FriendListItem.jsx'
export const FriendList = ({ friendsData }) => {
  return (
    <ul className={css.friendList}>
      {
        friendsData?.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })
      }
    </ul>
  );
};
