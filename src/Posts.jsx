import React, { useEffect, useState } from 'react'

function Posts() {

    const[posts,setPosts] = useState([]);

    useEffect (()=>{
        fetch('http://localhost:3000/posts')
        .then((data)=> data.json())
        .then((data=>setPosts(data)))
        .catch(err=>console.log(err));
    

    },[]);

  return (
    <div>
        {posts.length >0 ?(
            <div>
            {posts.map((post)=>(
                <div key={post.id}>
                   <div>
                    <img className="rounded-circle d-flex" src="" alt="orofile picture" />
                    <h5>{post.user.username}</h5>
                    </div> 
                    <img src="postImage" alt="post" />

                </div>

            ))}
            </div>
        ):(
            <div>
                Loading Posts
            </div>
        )
    }
        </div>
  )
}

export default Posts