import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const logOut = () =>{
        localStorage.removeItem('user');
        navigate('/')
    }
  return (
    <div style={{width:'100vw',height:'10vh',border:'1px solid black',textAlign:'center'}}>
          <h1>Header</h1>
          {
            user ? <h4>Wel-Come {user.data.name} <span>  </span>
            <button onClick={logOut}>LogOut</button></h4>:<h4>Not Logged In</h4>
          }
          

    </div>
    )
}

export default Header
