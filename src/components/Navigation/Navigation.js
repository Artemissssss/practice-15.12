import style from "./Navigation.module.css"
import NavList from "../NavList/NavList"
import Login from "../Login/Login"

function Navigation() {
  return (
    <nav className={style.navSect}>
        <div className={style.logoWrap}>
        <a href="#" className={style.logoLink}>LOGO<span className={style.spanLogo}>Auto</span></a>
        </div>
        <NavList/>
        <Login />
    </nav>
  )
}
export default Navigation