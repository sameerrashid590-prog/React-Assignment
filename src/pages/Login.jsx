import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

function Login(){

const navigate = useNavigate();

const [ email,setEmail]=useState("");
const [password,setPassword]=useState("");


const login = async()=>{

const {error}=await supabase.auth.signInWithPassword({
email,
password
});


if(error){

alert(error.message);

}else{

navigate("/dashboard");

}

};


return (

<>
<input
placeholder="email"
onChange={(e)=>setEmail(e.target.value)}
/>


<input
type="password"
placeholder="password"
onChange={(e)=>setPassword(e.target.value)}
/>


<button onClick={login}>
Login
</button>

<p>
  Don't have an account?
  <Link to="/signup"> Sign up</Link>
</p>

</>

)

}

export default Login;