import styles from './LoginForm.module.css';
import TridexLogo from '../../../assets/TridexLogo.svg';
import Input from '../../../components/Input/input';

import { loginRequest } from '../../../service/public.service';
import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import Button from '../../../components/buttons/Button';

export default function LoginForm() {
  const { login } = useAuth();

  const [userLogin, setUserlogin] = useState({
    nombre: '',
    contrasena: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleChange = (key, value) => {
    setUserlogin(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(userLogin)
      const response = await loginRequest(userLogin);
      login(response); // Maneja la redirección o lógica posterior al login aquí.
      setIsLoading(false);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      setShowErrorModal(true); // Mostrar modal de error
      setIsLoading(false);
    }
  };

  const closeModal = () => setShowErrorModal(false);

  return (
    <>
      <form className={styles.Form} onSubmit={handleLogin}>
        <fieldset>
          <img className={styles.Logo} src={TridexLogo} alt="Tridex Logo" />
          <div className={styles.Inputs}>
            <Input
              title='Usuario'
              placeholder='Ingresa tu usuario'
              isPassword={false}
              onChange={(e) => handleChange('nombre', e.target.value)}
              value={userLogin.nombre}
              isRequired={true}
            />
            <Input
              title='Contraseña'
              placeholder='Ingresa tu contraseña'
              isPassword={true}
              onChange={(e) => handleChange('contrasena', e.target.value)}
              value={userLogin.contrasena}
              isRequired={true}
              inputType='password'
            />  
          </div>
          <Button title={isLoading ? 'Iniciando...' : 'Iniciar sesión'} disable={isLoading} />

        </fieldset>
      </form>
      {/* Modal de error */}
      {showErrorModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p>Contraseña o usuario incorrecto</p>
            <button onClick={closeModal} className={styles.closeButton}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}
