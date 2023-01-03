import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate()
    const loginRed = () => {
    navigate("/login")
    }
  return (
    <div className={styles.loginSect}>
        <button onClick={loginRed} className={styles.login}>Login</button>
        <button onClick={loginRed} className={styles.reg}>Register</button>
    </div>
  )
}
export default Login