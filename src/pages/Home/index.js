import './styles.css';
import background from '../../assets/background.png';
import { useState } from 'react';

import Header from "../../components/Header";
import ItemList from "../../components/ItemList";
import Input from '../../components/Input';
import Button from '../../components/Button';
import Profile from '../../components/Profile';




function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  return (
    <div className="App">
      <Header className="header" />
      <div className="content">
        <img src={background} className="background" alt="background app" />
        <div className="information">
          <div className="search">
            <Input get={user} set={setUser} />
            <Button 
              user={user} 
              setCurrentUser={setCurrentUser} 
              setRepos={setRepos}
            />
          </div>
          {currentUser?.name ? (<Profile currentUser={currentUser} />): null}
          
          {repos?.length > 0 ? (
            <div>
              <h4 className='repository'>Repositórios</h4>
              {repos.map((repo) => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
