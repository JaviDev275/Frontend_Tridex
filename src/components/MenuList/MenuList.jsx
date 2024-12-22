import { useState } from 'react';
import styles from './MenuList.module.css';
import TridexLogo from '../../assets/TridexLogoS.svg';

export default function MenuList() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
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
