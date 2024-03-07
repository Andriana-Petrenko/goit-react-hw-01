import css from "./FriendListItem.module.css";
const FriendListItem = ({avatar,name,isOnline}) => {
  return (
    <li className={css.friend_item}>
  <img src={avatar} alt="Avatar" width="48" />
          <p>{name}</p>
      {isOnline ? (<p className={css.green}>Online</p>) : (<p className={css.red}>Offline</p>)}
</li>
  )
}

export default FriendListItem