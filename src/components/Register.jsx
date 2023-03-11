import "./Register.css";
import { useState } from 'react'
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [role,setRole] = useState("");
  const [password,setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [id,setId] = useState('')

  const register = () => {
    axios.post('http://localhost:5000/users/register',{
      username: username,
      password: password,
      role:role
    })
    .then(function (response) {
      // handle success
      console.log(response.data);
      setMessage(response.data.message)
      setId(response.data.id)
    })
  }


  return (
    <div id="main-container">
        <h2>{message} with {id}</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="off"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="role">Role</label>
        <input type="text" 
        name="role" 
        value={role} 
        onChange={(e) => setRole(e.target.value)} 
        placeholder="Enter your roll" 
        required />
        <br />
        <button onClick={register} type="button">Regtister</button>
      </form>
     
    </div>
  );
}

export default Register;
