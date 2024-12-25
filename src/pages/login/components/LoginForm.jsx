import styles from './LoginForm.module.css';
import TridexLogo from '../../../assets/TridexLogo.svg';
import Button from '../../../components/buttons/Button';
import Input from '../../../components/Input/input';

import { useNavigate } from 'react-router-dom';



import { loginRequest } from '../../../service/public.service';
import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';

export default function LoginForm() {
  const { login } = useAuth();
  

  const [userLogin, setUserlogin] = useState({
    nombre: '',
    contrasena: ''
  });

  const [isLoading, setIsLoading] = useState(false);

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
      const { usuario } = await loginRequest(userLogin);
      setTimeout(() => { 
        login(usuario);
        setIsLoading(false); 
      }, 2000);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      setIsLoading(false);
    }
  }

  return (
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
            <Button  title={isLoading ? 'Iniciando' : "Iniciar sesión"} disable={isLoading} />

            
        </fieldset>
    </form>
  )
}
