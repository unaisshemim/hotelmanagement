import React from 'react'
import './mainscreen.scss'
import Navbar from '../navbar/Navbar'
function MainScreen() {
  return (
  
<div className="main">
<Navbar/>
    <div className='main-screen'>
            <div className="contents">
                <h1 className='title'>HEAVEN</h1>
                <div className='slotButton'>
                    <button>book your room</button>
                </div>
            </div>
</div>

    </div>
    
  )
}

export default MainScreen