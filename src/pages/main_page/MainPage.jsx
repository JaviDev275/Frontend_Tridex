import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/search/SearchBar';
import MenuList from '../../components/MenuList/MenuList';
import styles from './MainPage.module.css';
import Table from './components/Table';
import Button from '../../components/buttons/Button';
import Modal from '../../components/modal/Modal';
import Input from '../../components/Input/input';

// Importa las funciones que traen los datos
import {
  getLoadingState,
} from '../../data/data'; // Ajusta la ruta según tu estructura
import { getAcuseDeEntregaRequest, getAcuseDemoRequest, getClientesRequest, getEquiposRequest, getManttoPreventivoRequest, getOrdenServicioRequest, getReciboDemoRequest, getSolicitudPrestamoRequest, } from '../../service/public.service';
import AcuseDemoRegisterForm from './components/RegisterForms/AcuseDemo';
import AcuseEntregaEquipoRegisterForm from './components/RegisterForms/AcuseEntregaEquipo';
import AcuseRecibidoDemo from './components/RegisterForms/AcuseRecibidoDemo';
import CalendarioManttoPreventivo from './components/RegisterForms/CalendarioManttoPreventivo';
import OrdenDeServicio from './components/RegisterForms/OrdenServicio';
import ClientesRegisterForm from './components/RegisterForms/Clientes';
import SolicitudPrestamoRegisterForm from './components/RegisterForms/SolicitudPrestamo';
import EquiposRegisterForm from './components/RegisterForms/Equipos';

export default function MainPage() {

  const [data, setData] = useState(getLoadingState());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState(() => AcuseDemoRegisterForm);

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const [isModalTableOpen, setIsModalTableOpen] = useState(false);
  const openTableModal = () => setIsModalTableOpen(true);
  const closeTableModal = () => setIsModalTableOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAcuseDemoRequest();
        setData(result);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  const handleMenuSelect = async (menuIndex) => {
    try {
      let result;

      switch (menuIndex) {
        case 0:
          setData(getLoadingState());
          result = await getAcuseDemoRequest();
          setCurrentForm(() => AcuseDemoRegisterForm);
          break;
        case 1:
          setData(getLoadingState());
          result = await getAcuseDeEntregaRequest();
          setCurrentForm(() => AcuseEntregaEquipoRegisterForm);
          break;
        case 2:
          setData(getLoadingState());
          result = await getReciboDemoRequest();
          setCurrentForm(() => AcuseRecibidoDemo);
          break;
        case 3:
          setData(getLoadingState());
          result = await getManttoPreventivoRequest();
          setCurrentForm(() => CalendarioManttoPreventivo);
          break;
        case 4:
          setData(getLoadingState());
          result = await getOrdenServicioRequest();
          setCurrentForm(() => OrdenDeServicio);
          break;
        case 5:
          setData(getLoadingState());
          result = await getSolicitudPrestamoRequest();
          setCurrentForm(() => SolicitudPrestamoRegisterForm);
          break;
        case 6:
          setData(getLoadingState());
          result = await getClientesRequest();
          setCurrentForm(() => ClientesRegisterForm);
          break;
        case 7:
          setData(getLoadingState());
          result = await getEquiposRequest();
          setCurrentForm(() => EquiposRegisterForm);
          break;
        // Añade más casos según sea necesario
        default:
          result = [];
          setCurrentForm(() => null);
      }

      setData(result);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className={styles.MainContainer}>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {currentForm ? React.createElement(currentForm) : <p>Selecciona un formulario</p>}
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
            <Table
              onClick={openTableModal}
              showDownloadColumn={true}
              data={data} />
          </table>
          <section className={styles.buttons}>
            <Button onClick={openModal} title="Insertar datos" />
          </section>
        </div>
      </main>
    </div>
  );
}
