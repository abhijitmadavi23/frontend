import React, { useState } from 'react'
import './Login.css'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';




function Login() {

    const navigate=useNavigate()
    const [data, setData]=useState({
        email:"",
        password:""
    })

    const handelchange=(e)=>{
        
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handellogin=async (e)=>{
        e.preventDefault()
        console.log(data)
        const{email , password}= data
        if(email && password){
            const fetchdata= await fetch(`${process.env.REACT_APP_SERVICE_DOMIN}login`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })

            const logdata=await fetchdata.json()
          
            if (logdata.alert){
                navigate("/home")
            }else{
                alert("wrong email and password")
            }
           
            console.log(logdata)

        }
        else{
            alert("Please enter required field")

        }

        

    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 main  position-relative' >
        <div  className=' p-3 sign position-absolute rounded '>SIGN IN</div>
        
        <div className=' p-5 box rounded ' >
            
            <div className=' profile mb-3 '>
             
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-circle "  viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            
                </svg>
             
             </div>    
            
            <form onSubmit={handellogin}>
                <div className='mb-2 input'>
                <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        </svg>
                     </InputGroup.Text>
                    <Form.Control
                    name="email"
                    onChange={handelchange}
                    value={data.email}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                </div>

                <div className='mb-1 input'>
                <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                        </svg>
                    </InputGroup.Text>
                    <Form.Control
                    type='password'
                    name="password"
                    onChange={handelchange}
                    value={data.password}
                    placeholder="password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                </div>
                <div className='d-flex '>
                <Form.Check aria-label="option 1"  className='me-1'/><span className='text-success'>Remember me</span><span className='ms-5 text-success'>Forgot Password ?</span>
                </div>

                <button className='bt rounded mt-4 p-2 w-100  d-flex justify-content-center align-items-center' >LOGIN</button>
                

            </form>
            <p className='text-success'> Already have account ? <Link  to="/signup">Sign Up</Link> </p>

        </div>
    </div>
  )
}

export default Login
