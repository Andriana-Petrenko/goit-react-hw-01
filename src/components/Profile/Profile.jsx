import "./Profile.css";
const Profile = ({ name, tag, location, image, stats }) => {
    return (
<div className="user-wrap">
<div>
<img className="user-img"
src={image}
alt="User avatar" width="100"
/>
<p className="user-name">{name}</p>
 <p>@{tag}</p>
<p>{location}</p>
</div>

<ul className="user-list">
 <li>
<span className="user-stats">Followers</span>
<span className="user-count">{stats.followers}</span>
 </li>
 <li>
<span className="user-stats">Views</span>
<span className="user-count">{stats.views}</span>
</li>
 <li>
 <span className="user-stats">Likes</span>
 <span className="user-count">{stats.likes}</span>
</li>
</ul>
</div>

    )

}

export default Profile;
