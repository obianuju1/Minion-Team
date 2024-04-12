import styles from "./UpdatePost.module.css"
import React from 'react';
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {supabase} from '../App'
import minion from './img/create-minion.png'
const UpdatePost =()=>{
    const {id}= useParams();
    const[post,setPost]=useState({name:"", occupation:"",location:""})
    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('minion')
                .select('*')
                .eq('id', id)
                .single();

            if (data) {
                setPost(data);
            } else {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [id]);

    const updatePost=async(event)=>{
        event.preventDefault()
        await supabase
        .from('minion')
        .update({name: post.name, occupation:post.occupation,location:post.location})
        .eq('id',id);
       
        if(data){
            alert("Updated the Minion Successfully")
            window.location = "/";
        } else {
            console.error('Error updating minion:', error);
            alert('Failed to update minion. Please try again.');
        }
    }
    const deletePost=async(event)=>{
        event.preventDefault();
        await supabase
  .from('minion')
  .delete()
  .eq('id', id);
  
    window.location = "/";


    }
    const handleChange = (event)=>{
        const {name, value}= event.target;
        setPost((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }
    return(
        <div className="UpdatePost">
            <h2>Update Your Minion</h2>
            <h3>Current Minion Info: </h3>
            <h4>{post.name},{post.occupation},{post.location}</h4>
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
              
               <input type="submit" value="Submit" onClick={updatePost} />
               <button className="deleteButton" onClick={deletePost}>Delete</button>
               </form>
        </div>
    )

}
export default UpdatePost;