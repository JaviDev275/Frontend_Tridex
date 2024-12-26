import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ title, disable  }) {
  return (
    <input value={title} type='submit' className={styles.button} disabled={disable}>
    </input>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
