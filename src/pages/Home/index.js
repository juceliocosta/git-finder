import './styles.css';
import background from '../../assets/background.png';
import { useState } from 'react';

import Header from "../../components/Header";
import Input from '../../components/Input';
import ButtonSearch from '../../components/ButtonSearch';
import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';




function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [layout, setLayout] = useState('repositories');

  return (
    <div className="App">
      <Header size={favorites.length} setLayout={setLayout} className="header" />
      <div className="content">
        <img src={background} className="background" alt="background app" />
        <div className="information">
          <div className="search">
            <Input get={user} set={setUser} />
            <ButtonSearch 
              user={user} 
              setCurrentUser={setCurrentUser} 
              setRepos={setRepos}
              setLayout={setLayout}
            />
          </div>
          {layout === 'repositories' && <>
              {currentUser?.name ? (<Profile currentUser={currentUser} />): null}
              <Repositories repos={repos} favorites={favorites} setFavorites={setFavorites} />
          </>}
          {layout === 'favorites' && <>
              <Repositories repos={favorites} favorites={favorites} setFavorites={setFavorites} />
          </>}
        </div>
      </div>
    </div>
  );
}

export default App;
