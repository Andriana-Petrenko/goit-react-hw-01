import "./FriendListItem.css"
const FriendListItem = ({avatar,name,isOnline}) => {
  return (
    <div>
  <img src={avatar} alt="Avatar" width="48" />
          <p>{name}</p>
          {isOnline  ? (<p className="green">Online</p>) : (<p className="red">Offline</p>)}
</div>
  )
}

export default FriendListItem