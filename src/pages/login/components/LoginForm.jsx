import styles from './LoginForm.module.css';
import TridexLogo from '../../../assets/TridexLogo.svg';
import Button from '../../../components/buttons/Button';
import Input from '../../../components/Input/input';

export default function LoginForm() {
  return (
    <form className={styles.Form}>
        <fieldset>
            <img className={styles.Logo} src={TridexLogo} alt="Tridex Logo" />
            <div className={styles.Inputs}>
                <Input
                title='Usuario'
                placeholder='Ingresa tu usuario'
                isPassword={false}
                />
                <Input
                title='Contraseña'
                placeholder='Ingresa tu contraseña'
                isPassword={true}
                />  
            </div>
            <Button title="Iniciar sesion" />
        </fieldset>
    </form>
  )
}
