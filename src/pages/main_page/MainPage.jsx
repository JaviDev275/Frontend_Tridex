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
  getLoadingState,
} from '../../data/data'; // Ajusta la ruta según tu estructura
import { getAcuseDeEntregaRequest, getAcuseDemoRequest, getClientesRequest, getEquiposRequest, getManttoPreventivoRequest, getOrdenServicioRequest, getReciboDemoRequest, getSolicitudPrestamoRequest, } from '../../service/public.service';
import Select from '../../components/Input/Select';

export default function MainPage() {

  const [data, setData] = useState(getLoadingState());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientesForSelectInput, setClientesForSelectInput] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [currentForm, setCurrentForm] = useState(() => null);
  const [selectedClient, setSelectedClient] = useState('');
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

        let clientesResult = await getClientesRequest();
        clientesResult = clientesResult.map((cliente) => ({
          value: cliente.Cliente,
          label: cliente.Cliente,
        }));
        setClientesForSelectInput(clientesResult);

        const equiposResult = await getEquiposRequest();
        const formattedEquipos = equiposResult.map((equipo) => ({
          value: equipo.Equipo,
          label: equipo.Equipo,
        }));
        setEquipos(formattedEquipos);
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
          setCurrentForm(() => acuseDemoRegisterForm);
          break;
        case 1:
          setData(getLoadingState());
          result = await getAcuseDeEntregaRequest();
          setCurrentForm(() => acuseDeEntregaRegisterForm);
          break;
        case 2:
          setData(getLoadingState());
          result = await getReciboDemoRequest();
          setCurrentForm(() => acuseDeEntregaRegisterForm);
          break;
        case 3:
          setData(getLoadingState());
          result = await getManttoPreventivoRequest();
          setCurrentForm(() => acuseDeEntregaRegisterForm);
          break;
        case 4:
          setData(getLoadingState());
          result = await getOrdenServicioRequest();
          setCurrentForm(() => acuseDeEntregaRegisterForm);
          break;
        case 5:
          setData(getLoadingState());
          result = await getSolicitudPrestamoRequest();
          setCurrentForm(() => acuseDeEntregaRegisterForm);
          break;
        case 6:
          setData(getLoadingState());
          result = await getClientesRequest();
          setCurrentForm(() => acuseDeEntregaRegisterForm);
          break;
        case 7:
          setData(getLoadingState());
          result = await getEquiposRequest();
          setCurrentForm(() => acuseDeEntregaRegisterForm);
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

  const acuseDemoRegisterForm = () => (
    <>
      <h3>Formulario Acuse Demo</h3>
      <Select
        name="cliente"
        onChange={handleInputChange}
        options={clientesForSelectInput}
        value={formInputs.cliente || ''}
        placeholder="Seleccionar cliente"
        label="Clientes"
      />
      <Input
        name="descripcion"
        title="Descripción"
        placeholder="Ingresa una descripción"
        onChange={handleInputChange}
        value={formInputs.descripcion || ''}
      />
    </>
  );

  const acuseDeEntregaRegisterForm = () => (
    <>
      <h3>Formulario Acuse de Entrega</h3>
      <Select
        name="cliente"
        onChange={handleInputChange}
        options={clientesForSelectInput}
        value={formInputs.cliente || ''}
        placeholder="Seleccionar cliente"
        label="Clientes"
      />
      <Select
        name="equipo"
        onChange={handleInputChange}
        options={equipos}
        value={formInputs.equipo || ''}
        placeholder="Seleccionar equipo"
        label="Equipos"
      />
    </>
  );

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
        <h2>Formulario</h2>
        {currentForm && currentForm()} {/* Renderiza el formulario dinámico */}
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
