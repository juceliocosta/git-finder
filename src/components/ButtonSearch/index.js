import { getUserData, getUserRepos } from '../../services/api';
import './styles.css';

const ButtonSearch = ({ user, setCurrentUser, setRepos, setLayout}) => {
  const handleGetData = async () => {
    setLayout('repositories');

    const newUser = await getUserData(user);
    if(newUser.name){     
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({avatar_url, name, bio, login});

      const newRepos = await getUserRepos(user);
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