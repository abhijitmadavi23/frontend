import React, { useState } from 'react'
import './Login.css'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const navigate=useNavigate()

    const [data,setData]=useState({
        Fname:" ",
        dob:"",
        email:"",
        password:""
    })

    function handelonchange(e){
        setData({
            ...data,
            [e.target.name]: e.target.value
        }
        )
    }

    async function  handelSubmit(e){
        e.preventDefault()
        const fetchdata= await fetch(`${process.env.REACT_APP_SERVICE_DOMIN}signup`, {
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
          })
  
          const dataSign= await fetchdata.json()
          console.log(dataSign)
  
          alert("Form Submitted")
          navigate("/")
       
        console.log(data)
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 position-relative sig-main  ' >
        <div className=' p-3 reg position-absolute rounded   '>REGISTER</div>   
     
      <div className='p-5 box rounded' >
              
            <form className='m-5 mt-0 ' onSubmit={handelSubmit}>
                <div className='book mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-journal-text " viewBox="0 0 16 16">
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg>
                </div>

                <div className='mb-2  '>
                    <label htmlFor='name' className='text-success'>Name</label><br/>
                    <input type='text' id='name' name="Fname" className='rounded opacity-50 vw-75 ' placeholder='Enter Name' value={data.Fname} onChange={handelonchange}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='date' className='text-success'>Date Of Birth</label><br/>
                    <input type='date' id='date' name="dob" className='rounded opacity-50'   placeholder='Enter DOB'  value={data.dob} onChange={handelonchange}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='email' className='text-success'>Email</label><br/>
                    <input type='email' id='email' name="email" className='rounded opacity-50 '  placeholder='Enter Email'  value={data.email} onChange={handelonchange}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='password' className='text-success'>Password</label><br/>
                    <input type='password' id='password' name="password" className='rounded opacity-50'  placeholder='Enter password'  value={data.password} onChange={handelonchange}/>
                </div>

                <button className='w-100 mt-3 rounded rgbt p-2'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Signup
