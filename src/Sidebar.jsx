import React from 'react'
//import App from './App'


function Sidebar() {
  return (
    <>
    <div>
        <img className="logo-text" src="src/assets/instagram-text.png" alt="" />
        <div><i class="bi bi-house-door"></i>Home</div>
        <div><i class="bi bi-search"></i>Search</div>
        <div><i class="bi bi-compass"></i>Explore</div>
        <div><i class="bi bi-play-circle-fill"></i>Reels</div>
        <div><i class="bi bi-chat-dots"></i>Message</div>
        <div><i class="bi bi-suit-heart"></i>Notification</div>
        <div><i class="bi bi-plus-square"></i>Create</div>
        <div><i class="bi bi-person-circle"></i>Profile</div>
    </div>

    <div>
      <div><i class="bi bi-threads"></i>Threads</div>
      <div><i class="bi bi-three-dots-vertical"></i>More</div>
    </div>
    </>
    
  )
}

export default Sidebar