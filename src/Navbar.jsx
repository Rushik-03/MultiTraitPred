import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <div className="nav">
          <div className='navbar'>
               <div className="nav-left">
                    <Link to="/" className='no'>Website</Link>
               </div>
               <div className="nav-right">
                    <div><Link to="predict" className='no'>Predict</Link></div>
                    <div><Link to="/" className='no'>Home</Link></div>
                    
               </div>
          </div>
          <br/>
     </div>
     
  )
}

export default Navbar