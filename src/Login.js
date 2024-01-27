//importion of react components
import React, { useState, } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/fontawesome-free-solid';


export default function Login() {
  //accepting user input
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, SetRole] = useState("");

  //handling the username input
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }

  //handling the password input
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  //handling the role input
  const handleRoleChange=(event)=>{
    SetRole(event.target.value)
  }

  const handleSubmit = event => {
    //preventing the default behaviour of the form
    event.preventDefault()

    axios.post('http://localhost/my-portfolio/src/backend/login.php',{
      username:username,
      password:password,
      role:role
    },{
      headers:{
        "Content-Type": "application/json"
      }
    }).then(response =>{
      try {
        if (response.data === "success") {
          navigate('/dashboard');
        }else if (response.data === "success") {
          navigate("/Voters")
        }else if (response.data === "success") {
          navigate("/candidate")
        }  else {
          navigate('/');
          alert('Invalid election id or password');
        }
      } catch (error) {
        console.error('Navigation error:', error);
      }
      

    })
  }

  return (
    <div class=" flex items-center justify-center h-[100vh] bg-gray-50">
      <div class="">
        <h1 class="font-primary  text-center text-2xl md:text-4xl text-blue-400 lg:text-2xl pl-10"> Online Election Runner</h1>
        <div class=" mt-10   border rounded-lg p-4  bg-white border boder-white shadow-md" >
          <h1 class="text-center text-gray-500 text-2xl md:text-4xl lg:text-2xl mb-6"> LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div class="flex items-center justify-flex gap-10">
              <div>
                <div>
                  {/* role input field*/}
                  <label htmlFor="username " class="text-sm md:text-lg text-gray-600 lg:text-sm ">Role</label>
                  <select value={role} onChange={handleRoleChange} class="hover:bg-blue-50 h-8 w-60 lg:ml-10 md:ml-2 outline-none border  border-gray-300 rounded pl-2  shadow-sm" type="text" id="username" required>
                      <option class="text-sm text-gray-500">-- select role--</option>
                      <option class="text-sm text-gray-500">Voter</option>
                      <option  class="text-sm text-gray-500">Candidate</option>
                      <option  class="text-sm text-gray-500">Admin</option>
                    </select><br></br>
                </div>
                <div class="mt-4">
                  {/* Email input field*/}
                  <label htmlFor="username " class="text-sm md:text-lg text-gray-600 lg:text-sm ">Username</label>
                  <input value={username} onChange={handleUsernameChange} class="hover:bg-blue-50 h-8 w-60 lg:ml-2 md:ml-2 outline-none border  border-gray-300 rounded pl-2  shadow-sm" type="text" id="username" required/><br></br>
                </div>
                {/* Password input field*/}
                <div class="mt-4">
                  <label htmlFor="username " class="text-sm md:text-lg text-gray-600 lg:text-sm">Password </label>
                  <input value={password} onChange={handlePasswordChange} class="hover:bg-blue-50 h-8 w-60 lg:ml-2 outline-none md:ml-2 border border-gray-300 rounded pl-2  shadow-sm" type="password" id="username"  required/><br></br>
                </div>
              </div>
              {/* Submit button*/}
              <div>
                <button class="h-16 w-16 rounded-full border border-blue-200 border-4 text-white  bg-blue-400 !text-lg"><FontAwesomeIcon  icon={faLongArrowAltRight} /></button>
              </div>
            </div>
          </form>
          {/* Link to signup page*/}
          <p class="text-sm md:text-lg text-gray-600 mt-6 lg:text-sm">
            Don't have an account? <Link class="text-blue-400" to="/signup">Sign up</Link>
          </p>

          {/* forgot password */}
          <p class="text-sm lg:text-sm md:text-lg text-gray-600 mt-4 text-right">
            <Link class="text-red-500" to="/dashboard">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>

  );
}
