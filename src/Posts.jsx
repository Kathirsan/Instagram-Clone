import React, { useEffect, useState } from 'react'

function Posts() {

    const[posts,setPosts] = useState([]);

    useEffect (()=>{
        fetch('http://localhost:3000/posts/1').
        then((data)=> data.json()).
        then((data=>setPosts(data))).
        catch(err=>console.log(err))
    

    });

  return (
    <div>Posts</div>
  )
}

export default Posts