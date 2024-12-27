import { useState, useRef, useEffect } from 'react';
import styles from './DropAlert.module.css';
import { GoBellFill } from "react-icons/go";

export default function DropAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Cierra el modal si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Icono de campana */}
      <div onClick={toggleModal} className={styles.bellIcon}>
        <GoBellFill size={24} />
      </div>

      {/* Modal */}
      {isOpen && (
        <div ref={modalRef} className={styles.modal}>
          <h4>Notificaciones</h4>
          <ul>
            <li>Notificación 1</li>
            <li>Notificación 2</li>
            <li>Notificación 3</li>
          </ul>
        </div>
      )}

      {/* Capa de fondo para cerrar el modal */}
      {isOpen && <div className={styles.overlay} onClick={closeModal}></div>}
    </div>
  );
}
