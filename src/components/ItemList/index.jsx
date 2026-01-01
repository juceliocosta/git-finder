import './styles.css';

const ItemList = ({id, title, description, url}) => {
  return (
    <div key={id} className='container-list'>
      <div className='item-list'>
        <strong>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title} ⤴
          </a>
        </strong>
        <p>{description}</p>
      </div>
      <hr />
    </div>
  );
}

export default ItemList
