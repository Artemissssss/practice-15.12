import styles from "./NavList.module.css"
import { useNavigate } from 'react-router-dom';
const data = [
    {
      title: 'Latest Competitions',
      link: '/competitions'
    },
    {
      title: 'Entry Lists',
      link: '/lists'
    },
    {
      title: 'Live Draws',
      link: '/draws'
    },
    {
      title: 'Winners',
      link: '/winners'
    },
    {
      title: 'Gift Cards',
      link: '/cards'
    },
    {
      title: 'How it Works',
      link: '/how-it-works'
    }
  ]
  
function NavList() {
const navigate = useNavigate()
const redirect = (event) =>{
  navigate(event.target.id)
}
  return (
    <ul className={styles.navList}>
        {data.map((db,i) => {
return <li key={i} onClick={redirect} className={styles.navItem}><p id={db.link} className={styles.navText}>{db.title}</p></li>
        })}
    </ul>
  )
}
export default NavList