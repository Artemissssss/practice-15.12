import styles from "./LoginForm.module.css"
import { Navigate, useNavigate } from 'react-router-dom';
import { useUser } from "../../App";

function LoginForm() {
    const {username, setUsername} = useUser()
    const navigate = useNavigate()
    const loginFunc = (event) =>{
        event.preventDefault()
        fetch(`https://petstore3.swagger.io/api/v3/user/login?username=${event.target.elements.login.value}&password=${event.target.elements.password.value}}`)
            .then((response) => navigate("/store"))
            setUsername(event.target.elements.login.value)
    }
    if(username){
        return(<Navigate to="/store"></Navigate>)
    }
  return (
    <form onSubmit={loginFunc} className={styles.form}>
        <input name="login" className={styles.loginIn} type="text" placeholder="Login"/>
        <input name="password" className={styles.loginIn} type="password" placeholder="Password"/>
        <button className={styles.submit}>Login</button>
    </form>
  )
}
export default LoginForm