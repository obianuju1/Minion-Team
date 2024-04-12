import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import { supabase } from '../App'
import styles from '../Pages/DisplayPost.module.css'
const DisplayPost =(props)=>{

    const[posts,setPosts]=useState([]);
   
    useEffect(()=>{
        const fetchPost=async()=>{
            const{data}=await supabase
            .from('minion')
            .select()
            .order('created_at',{ascending:true})
            setPosts(data)
        }
      
        fetchPost()
    },[props])

  
    return(
        <div className={styles.DisplayPosts}>
            {
                posts&& posts.length >0?
                posts.map((post,index)=>
                <Card id={post.id}  name={post.name} occupation={post.occupation} location={post.location}/>

                )
                :<h2>{'No Minions ;('}</h2>
            }
            
        </div>
    )

}
export default DisplayPost;