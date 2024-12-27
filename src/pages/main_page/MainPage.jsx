import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/search/SearchBar';
import MenuList from '../../components/MenuList/MenuList';
import styles from './MainPage.module.css';
import Table from './components/Table';
import Button from '../../components/buttons/Button';
import Modal from '../../components/modal/Modal';
import Input from '../../components/Input/input';

import {
  getLoadingState,
} from '../../data/data';
import { getAcuseDeEntregaRequest, getAcuseDemoRequest, getClientesRequest, getEquiposRequest, getManttoPreventivoRequest, getOrdenServicioRequest, getReciboDemoRequest, getSolicitudPrestamoRequest, } from '../../service/public.service';
import AcuseDemoRegisterForm from './components/RegisterForms/AcuseDemo';
import AcuseEntregaEquipoRegisterForm from './components/RegisterForms/AcuseEntregaEquipo';
import AcuseRecibidoDemo from './components/RegisterForms/AcuseRecibidoDemo';
import CalendarioManttoPreventivo from './components/RegisterForms/CalendarioManttoPreventivo';
import OrdenDeServicio from './components/RegisterForms/OrdenServicio';
import ClientesRegisterForm from './components/RegisterForms/Clientes';
import SolicitudPrestamoRegisterForm from './components/RegisterForms/SolicitudPrestamo';
import EquiposRegisterForm from './components/RegisterForms/Equipos';
import DropAlert from '../../components/dropAlert/DropAlert';

export default function MainPage() {
  const [data, setData] = useState(getLoadingState([]));
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataIndex, setDataIndex] = useState();
  const [currentForm, setCurrentForm] = useState(() => AcuseDemoRegisterForm);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalTableOpen, setIsModalTableOpen] = useState(false);
  const openTableModal = () => setIsModalTableOpen(true);
  const closeTableModal = () => setIsModalTableOpen(false);

  const fetchData = async (menuIndex = 0) => {
    const requestMap = {
      0: getAcuseDemoRequest,
      1: getAcuseDeEntregaRequest,
      2: getReciboDemoRequest,
      3: getManttoPreventivoRequest,
      4: getOrdenServicioRequest,
      5: getSolicitudPrestamoRequest,
      6: getClientesRequest,
      7: getEquiposRequest,
    };

    const requestFunction = requestMap[menuIndex] || getAcuseDemoRequest;

    try {
      const result = await requestFunction();
      setData(result);
      setFilteredData(result);
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect que se ejecuta solo una vez cuando se monta el componente
  useEffect(() => {
    fetchData(0); // Llamada a la API al montar el componente
  }, []);

  // useEffect que se ejecuta cuando el término de búsqueda cambia o los datos cambian
  useEffect(() => {
    const filtered = data.filter(item => {
      return Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleFormSubmit = () => {
    fetchData(dataIndex);
    closeModal();
  };

  const handleMenuSelect = async (menuIndex) => {
    try {
      setSearchTerm(''); // Resetea el término de búsqueda al cambiar de sección
      setData(getLoadingState()); // Resetear los datos antes de hacer una nueva solicitud
      let result;

      switch (menuIndex) {
        case 0:
          result = await getAcuseDemoRequest();
          setCurrentForm(() => AcuseDemoRegisterForm);
          break;
        case 1:
          result = await getAcuseDeEntregaRequest();
          setCurrentForm(() => AcuseEntregaEquipoRegisterForm);
          break;
        case 2:
          result = await getReciboDemoRequest();
          setCurrentForm(() => AcuseRecibidoDemo);
          break;
        case 3:
          result = await getManttoPreventivoRequest();
          setCurrentForm(() => CalendarioManttoPreventivo);
          break;
        case 4:
          result = await getOrdenServicioRequest();
          setCurrentForm(() => OrdenDeServicio);
          break;
        case 5:
          result = await getSolicitudPrestamoRequest();
          setCurrentForm(() => SolicitudPrestamoRegisterForm);
          break;
        case 6:
          result = await getClientesRequest();
          setCurrentForm(() => ClientesRegisterForm);
          break;
        case 7:
          result = await getEquiposRequest();
          setCurrentForm(() => EquiposRegisterForm);
          break;
        default:
          result = [];
          setCurrentForm(() => null);
      }

      setData(result);
      setFilteredData(result); // Actualiza los datos filtrados
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className={styles.MainContainer}>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {currentForm ? React.createElement(currentForm, { onSubmit: handleFormSubmit }) : <p>Selecciona un formulario</p>}
      </Modal>

      <Modal isOpen={isModalTableOpen} onClose={closeTableModal}>
        <h2>Ingresa tus datos</h2>
        <Input title="Usuario" placeholder="Ingresa tu usuario" isPassword={false} />
        <Input title="Contraseña" placeholder="Ingresa tu contraseña" isPassword={true} />
      </Modal>

      <nav className={styles.nav}>
        <SearchBar
          placeholder="Buscar persona..."
          value={searchTerm}
          onSearch={(text) => setSearchTerm(text)}
        />
        <DropAlert />
      </nav>
      <main className={styles.MainContent}>
        <MenuList onMenuSelect={(index) => {
          handleMenuSelect(index);
          setDataIndex(index);
        }} />
        <div className={styles.Sectionbuttons}>
          {filteredData.length === 0 ? (
            <p>No se encontraron resultados</p>
          ) : (
            <table className={styles.table}>
              <Table
                index={dataIndex !== undefined ? dataIndex : 0}
                onClick={openTableModal}
                showDownloadColumn={true}
                data={filteredData}
              />
            </table>
          )}
          <section className={styles.buttons}>
            <Button onClick={openModal} title="Insertar datos" />
          </section>
        </div>
      </main>
    </div>
  );
}
