import './styles.css';

const Input = ({get, set}) => {
  return (
    <input 
      name="usuario" 
      value={get} 
      onChange={event => set(event.target.value)} 
      placeholder="@username" 
    />
  );
}

export default Input;