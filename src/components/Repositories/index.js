import ButtonStar from '../ButtonStar';
import ItemList from '../ItemList';

const Repositories = ({repos, favorites, setFavorites}) => {

  if(repos?.length > 0) return (
    <div>
      <h4 className='repository'>Repositórios</h4>
      {repos.map((repo) => (
        <div className='title-container'>
          <ItemList id={repo.id} title={repo.name} description={repo.description} />
          <ButtonStar repo={repo} favorites={favorites} setFavorites={setFavorites} />
        </div>
      ))}
    </div>
  );
  return (null);  
}

export default Repositories;