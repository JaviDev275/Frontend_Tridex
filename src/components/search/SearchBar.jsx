import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ placeholder }) => {
    return (
        <div className={styles.SearchBar} onClick={() => document.getElementById('search-input').focus()}>
            <IoSearchOutline className={styles.Icon} />
            <input
                id="search-input"
                type="text"
                className={styles.Input}
                placeholder={placeholder || 'Buscar...'}
            />
        </div>
    );
};

SearchBar.propTypes = {
    placeholder: PropTypes.string,
};

export default SearchBar;
