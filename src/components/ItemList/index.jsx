import './styles.css';

const ItemList = ({id, title, description}) => {
  return (
    <div className='container-list'>
      <div className='item-list'>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <hr />
    </div>
  );
}

export default ItemList
