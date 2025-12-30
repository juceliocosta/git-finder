import './styles.css';

const ButtonSearch = ({ user, setCurrentUser, setRepos, setLayout}) => {
  const handleGetData = async () => {
    setLayout('repositories');

    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    if(newUser.name){     
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({avatar_url, name, bio, login});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();
      
      if(newRepos.length > 0){
        setRepos(newRepos);
      }
      window.scrollTo(0, 0);
    }
  }
  
  return (
    <button onClick={handleGetData}>Buscar</button>
  );
}

export default ButtonSearch;