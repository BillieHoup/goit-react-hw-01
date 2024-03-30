import { Profile } from './components/Profile/Profile';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friendsData={friends} />
      <TransactionHistory items={transactions} 
      />;
    </div>
  );
};