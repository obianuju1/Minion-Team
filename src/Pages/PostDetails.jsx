import{useParams, Link} from 'react-router-dom'
import{useState, useEffect} from 'react';
import {supabase} from '../App'
import styles from "./PostDetails.module.css"

const PostDetails=()=>{
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
    return(
       
        <div className={styles.Details}>
             <h2>Stats</h2>
        <h2>Minion Name: {post.name}</h2>
       
        <h3>Occupation: {post.occupation}</h3>
        <h3>Location: {post.location}</h3>
      <Link to={'/edit/'+id}><button>Edit Minion</button></Link>
        </div>
    )

}
export default PostDetails;