import './styles.css';

const ButtonStar = ({ repo, favorites, setFavorites }) => {
  const isExist = favorites.find(fav => fav.id === repo.id);

  const handleGetData = async () => {
    if(!isExist) setFavorites(prev => [...prev, repo]);
    else setFavorites(prev => prev.filter(fav => fav.id !== repo.id));
  }

  return (
    <button className='favorite-star' onClick={handleGetData}>{isExist ? '★' : '☆'}</button>
  );
}

export default ButtonStar;