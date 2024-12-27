import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ placeholder, onSearch, value, className, ...props }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div
      className={`${styles.SearchBar} ${className || ''}`}
      onClick={() => document.getElementById('search-input').focus()}
      {...props}
    >
      <IoSearchOutline className={styles.Icon} />
      <input
        id="search-input"
        type="text"
        className={styles.Input}
        placeholder={placeholder || 'Buscar...'}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};

SearchBar.defaultProps = {
  value: '',
  className: '',
};

export default SearchBar;
