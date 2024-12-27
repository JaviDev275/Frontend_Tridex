import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function ButtonSubmit({ title, disable = false }) {
  return (
    <input value={title} type='submit' className={styles.button} disabled={disable}>
    </input>
  );
}

ButtonSubmit.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool
};
