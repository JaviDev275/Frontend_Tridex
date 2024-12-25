import { useState } from 'react';
import SearchBar from '../../components/search/SearchBar';
import MenuList from '../../components/MenuList/MenuList';
import styles from './MainPage.module.css';
import Table from './components/Table';
import Button from '../../components/buttons/Button';
import Modal from '../../components/modal/Modal';
import Input from '../../components/Input/input';

// Importa las funciones que traen los datos
import {
  getAcuseDemo,
  getAcuseDeEntrega,
  getReciboDemo,
  getManttoPreventivo,
  getOrdenServicio,
  getSolicitudPrestamo,
} from '../../data/data'; // Ajusta la ruta según tu estructura

export default function MainPage() {
  const [data, setData] = useState(getAcuseDemo()); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalTableOpen, setIsModalTableOpen] = useState(false);
  const openTableModal = () => setIsModalTableOpen(true);
  const closeTableModal = () => setIsModalTableOpen(false);

  // Función para actualizar los datos según el índice del menú
  const handleMenuSelect = (menuIndex) => {
    switch (menuIndex) {
      case 0:
        setData(getAcuseDemo());
        break;
      case 1:
        setData(getAcuseDeEntrega());
        break;
      case 2:
        setData(getReciboDemo());
        break;
      case 3:
        setData(getManttoPreventivo());
        break;
      case 4:
        setData(getOrdenServicio());
        break;
      case 5:
        setData(getSolicitudPrestamo());
        break;
      default:
        setData([]);
    }
  };

  return (
    <div className={styles.MainContainer}>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Ingresa tus datos</h2>
        <Input title="Usuario" placeholder="Ingresa tu usuario" isPassword={false} />
        <Input title="Contraseña" placeholder="Ingresa tu contraseña" isPassword={true} />
      </Modal>

      <Modal isOpen={isModalTableOpen} onClose={closeTableModal}>
        <h2>Ingresa tus datos</h2>
        <Input title="Usuario" placeholder="Ingresa tu usuario" isPassword={false} />
        <Input title="Contraseña" placeholder="Ingresa tu contraseña" isPassword={true} />
      </Modal>

      <nav className={styles.nav}>
        <SearchBar placeholder="Buscar persona..." />
      </nav>
      <main className={styles.MainContent}>
        <MenuList onMenuSelect={handleMenuSelect} />
        <div className={styles.Sectionbuttons}>
          <table className={styles.table}>
            <Table onClick={openTableModal} showDownloadColumn={true} data={data} />
          </table>
          <section className={styles.buttons}>
            <Button onClick={openModal} title="Insertar datos" />
          </section>
        </div>
      </main>
    </div>
  );
}
