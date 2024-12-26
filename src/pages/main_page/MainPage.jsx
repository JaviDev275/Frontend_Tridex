import { useEffect, useState } from 'react';
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
} from '../../data/data'; // Ajusta la ruta según tu estructura
import { getAcuseDeEntregaRequest, getAcuseDemoRequest, getManttoPreventivoRequest, getOrdenServicioRequest, getReciboDemoRequest, getSolicitudPrestamoRequest, } from '../../service/public.service';

export default function MainPage() {
  const [data, setData] = useState(getAcuseDemo()); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalTableOpen, setIsModalTableOpen] = useState(false);
  const openTableModal = () => setIsModalTableOpen(true);
  const closeTableModal = () => setIsModalTableOpen(false);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAcuseDemoRequest();
        setData(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  

  const handleMenuSelect = async (menuIndex) => {
    try {
      let result
      switch (menuIndex) {
        case 0:
          result = await getAcuseDemoRequest();
          break;
        case 1:
          result = await getAcuseDeEntregaRequest();
          break;
        case 2:
          result = await getReciboDemoRequest();
          break;
        case 3:
          result = await getManttoPreventivoRequest();
          break;
        case 4:
          result = await getOrdenServicioRequest();
          break;
        case 5:
          result = await getSolicitudPrestamoRequest();
          break;
        default:
          setData([]);
      } 
      setData(result);
    } catch (err) {
      console.log(err.message);
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
