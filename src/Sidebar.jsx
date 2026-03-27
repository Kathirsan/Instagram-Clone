import React from 'react'
//import App from './App'


function Sidebar() {
  return (
    <div className="m-3">
    <div className='d-flex flex-column gap-3'>
        <img className="logo-text" src="src/assets/instagram-text.png" alt="" />
        <div><i className="bi bi-house-door"></i>Home</div>
        <div><i className="bi bi-search"></i>Searches</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-play-circle-fill"></i>Reels</div>
        <div><i className="bi bi-chat-dots"></i>Message</div>
        <div><i className="bi bi-suit-heart"></i>Notification</div>
        <div><i className="bi bi-plus-square"></i>Create</div>
        <div><i className="bi bi-person-circle"></i>Profile</div>
    </div>

    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
      <div><i className="bi bi-threads"></i>Threads</div>
      <div><i className="bi bi-three-dots-vertical "></i>More</div>
    </div>

    </div>
    
  )
}

export default Sidebar