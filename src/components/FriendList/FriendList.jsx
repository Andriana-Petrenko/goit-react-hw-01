import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";
function FriendList({friends}) {
  return (
      <ul className={css.friends_list}>
	{friends.map(friend => {
        return <li className={css.friend_item} key={friend.id}><FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} /></li>;
			})}
</ul>
  )
}

export default FriendList