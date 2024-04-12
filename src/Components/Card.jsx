import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import minion from '../Pages/img/minion-outline.gif'
const Card=({id,name,occupation,location})=>{

return(
    <div className={styles.Card}>
      <Link to={'/details/'+id}><img src={minion} alt="minion" style={{width:"200px", height:"150px"}}/></Link>  
        <p>Name of Minion: {name}</p>
        <p>Occupation of Minion: {occupation}</p>
        <p>Location of Minion: {location}</p>
        <Link to={'/edit/'+id}><button>Edit Minion</button></Link>

    </div>
)
}
export default Card;