import React , {useState , useEffect} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import $ from 'jquery'
import '../../styles/Navbar/Navbar.css'
import donate from "../../ASSETS/donate-vector.png"
function Navbar() {


  window.addEventListener('scroll' , function(){
    let res = window.scrollY;
    if(res >= 150)
      $("#navbar").css({'backgroundColor':'rgba(0, 0, 0, 0.884)' , 'padding':'10px 20px' , 'transition':'all 1s' })  
    else
      $("#navbar").css({'backgroundColor':'transparent' , 'padding':'40px 60px' })
    
  
  })


  return (
    <div>
      <nav id="navbar" className='navbar' style={{background:"transparent" , padding:"40px", width:"100%", height:"70px",
    color:"white" , position:"fixed" , top:"0%" , left:"0%" , zIndex:"5"
    }}>
         <Link to="/" style={{textDecoration:"none"}}><div class="nav-logo"><h3 class="logo">Aashraya</h3></div></Link>
         {/* <Link to ="/admin" style={{textDecoration:"none", color:"white",cursor:"pointer"}}>Admin</Link> */}

<ul class="nav-links" id="links" style={{position:"relative" , right:"3%"}}>
  <li><Link to ="/saktiweek">Projects</Link></li>
  <li><Link to ="/saktiweek">Gallery</Link></li>
  <li><Link to ="/saktiweek">Blog</Link></li>
  <li><Link to ="/saktiweek">Team</Link></li>
  <li><Link to ="/saktiweek">Library</Link></li>
  <li><Link to ="/join_us">Join Us</Link></li>
  <li><Link to ="/saktiweek" style={{zIndex:"3"}}>Donate</Link></li>
  <img src={donate} alt="..."/>
</ul>
      </nav>
    </div>

  )
}

export default Navbar