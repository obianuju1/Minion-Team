import { useRoutes, Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import minion from './img/minions-banana.png'
import React from 'react';
import styles from'./Home.module.css'
import minion2 from './img/minion-team.gif'
const Home =()=>{
  
     
    return(
     
      <div className={styles.Home}>
      <h1>Minions</h1>
      <img src={minion2} alt="Minions"/>
      <h2>Create your own Minion Team</h2>
      </div>
    )
}
export default Home;