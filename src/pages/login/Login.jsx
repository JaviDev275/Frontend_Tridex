import styles from './Login.module.css';
import Gradient from '../../assets/Gradient.png';
import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <div>
        <img className={styles.GradientBg} src={Gradient} alt="womanClothes" /> 
        <LoginForm/>
    </div>
  )
}
