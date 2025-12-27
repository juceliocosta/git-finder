import './styles.css';

const Profile = ({currentUser}) => {
  return (
    <>
      <div className="profile">
        <img 
          src={currentUser.avatar_url}
          className="profile-img" 
          alt="GitHub Profile"
        />
        <div>
          <h3>{currentUser.name}</h3>
          <span>@{currentUser.login}</span>
          <p>{currentUser.bio}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Profile;