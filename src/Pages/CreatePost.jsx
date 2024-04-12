import styles from "./CreatePost.module.css";
import React from'react';
import {useState} from 'react';
import minion from './img/create-minion.png'
import minion2 from './img/minion-cute.gif'
import { supabase } from '/src/App.jsx'

const CreatePost =()=>{
    const[post,setPost]=useState({name:"", occupation:"",location:""})
    const createPost = async (event)=>{
        event.preventDefault();
        await supabase.from('minion')
        .insert({name:post.name,occupation:post.occupation,location:post.location})
        .select();
      
            window.location = "/";
        
    }
    console.log(post)
    const handleChange = (event)=>{
       
        const {name, value}=event.target;
        setPost((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }
   
    return(
        <div className="CreatePost">
            <h2 className={styles.title}>
                Create Your Minion Team
            </h2>
            <img src={minion} alt="minions" style={{width:"600px", height:"400px"}}/>
            <form>
                
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange}/>

                </label>
             
            
                <label>
                    Occupation:
                    <input type="text" name="occupation" onChange={handleChange}/>

                </label>
             
               
                <label>
                    Location:
                    <input type="text" name="location" onChange={handleChange}/>

                </label>
              
               <input type="submit" value="Submit" onClick={createPost} />
               
            </form>
            
        </div>
    )
}
export default CreatePost;