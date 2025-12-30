import gitLogo from '../../assets/github.png';
import './styles.css';

const Header = ({size, setLayout}) => {
    const toggleLayout = async () => {
        setLayout('favorites');
        window.scrollTo(0, 0);
    }

    return (
        <header >
            <div className='git-logo'>
                <img src={gitLogo} width={32} height={32} alt="github logo"/>
                <h1>GitFinder</h1>
            </div>
            <button className="favorite-container" onClick={toggleLayout}>
                <span className='favorite-star'>★</span>
                <span>{size}</span>
            </button>
        </header>
    )
}

export default Header;
