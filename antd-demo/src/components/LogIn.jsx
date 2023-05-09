import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const logIn = async () => {
        try {
            const data = await axios.post('http://localhost:4500/home/login', {
                email,
                password,
            });
            if (data) {
                localStorage.setItem("user", JSON.stringify(data));
                alert("User LogIn Sucessfull");
                navigate('/success');
            }

        } catch (error) {
            alert("Invalid email or password");
        }
    }
    return (
        <>
            <div className='HomeMainDiv'>
                <div className='formDiv'>
                    <h4 className='mainLabel'>LogIn</h4>
                    <div className='inputGroup'>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='inputBox' placeholder='UserName' />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='inputBox' placeholder='Password' />
                        <button className='bttn btnlogin' onClick={logIn}>LogIn</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn
