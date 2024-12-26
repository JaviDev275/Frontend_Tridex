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

export default function MainPage() {

  const [data, setData] = useState(getLoadingState());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState(() => AcuseDemoRegisterForm);
  const [formInputs, setFormInputs] = useState({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFormInputs({}); // Limpia los inputs
  };

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
          setCurrentForm(() => reciboDemoRegisterForm);
          break;
        case 5:
          setData(getLoadingState());
          result = await getSolicitudPrestamoRequest();
          setCurrentForm(() => reciboDemoRegisterForm);
          break;
        case 6:
          setData(getLoadingState());
          result = await getClientesRequest();
          setCurrentForm(() => reciboDemoRegisterForm);
          break;
        case 7:
          setData(getLoadingState());
          result = await getEquiposRequest();
          setCurrentForm(() => reciboDemoRegisterForm);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };


  const reciboDemoRegisterForm = () => (
    <>
      <h3>Formulario Recibo Demo</h3>
      <Input
        name="fecha"
        title="Fecha"
        placeholder="Ingresa la fecha"
        onChange={handleInputChange}
        value={formInputs.fecha || ''}
      />
      <Input
        name="monto"
        title="Monto"
        placeholder="Ingresa el monto"
        onChange={handleInputChange}
        value={formInputs.monto || ''}
      />
    </>
  );

  const manttoPreventivoRegisterForm = () => (
    <>
      <h3>Formulario Mantenimiento Preventivo</h3>
      <Input
        name="equipo"
        title="Equipo"
        placeholder="Nombre del equipo"
        onChange={handleInputChange}
        value={formInputs.equipo || ''}
      />
      <Input
        name="fecha"
        title="Fecha"
        placeholder="Ingresa la fecha"
        onChange={handleInputChange}
        value={formInputs.fecha || ''}
      />
    </>
  );

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
