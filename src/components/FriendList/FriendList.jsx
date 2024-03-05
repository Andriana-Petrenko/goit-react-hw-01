import FriendListItem from "./FriendListItem";
import "./FriendList.css"
function FriendList({friends}) {
  return (
   <ul className="friends-list">
	{friends.map((friend) => {
        return <li className="friend-item" key={friend.id}><FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} /></li>;
			})}
</ul>
  )
}

export default FriendList