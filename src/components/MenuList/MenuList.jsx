import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuList.module.css';
import TridexLogo from '../../assets/TridexLogoS.svg';

export default function MenuList({ onMenuSelect }) {
  // Inicializa el primer botón como activo
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    onMenuSelect(index);
  };

  const menuItems = [
    "Acuse de entrega demo",
    "Acuse de entrega",
    "Acuse de recibo demo",
    "Calendario de Mantto preventivo",
    "Orden de servicio",
    "Solicitud de préstamo",
  ];

  return (
    <aside className={styles.menuList}>
      <img className={styles.Logo} src={TridexLogo} alt="Tridex Logo" />
      <nav>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`${styles.button} ${activeButton === index ? styles.active : ''}`}
                onClick={() => handleButtonClick(index)}
              >
                <p>{item}</p>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

MenuList.propTypes = {
  onMenuSelect: PropTypes.func.isRequired,
};
