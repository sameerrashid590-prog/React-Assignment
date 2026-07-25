import { useState } from "react";
import { supabase } from "../supabaseClient";

import {
  Container,
  TextField,
  Button,
  Typography
} from "@mui/material";


function Signup(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const signup = async()=>{

const {data,error}=await supabase.auth.signUp({
email,
password
});


if(error){
alert(error.message);
}
else{
alert("Account created!");
}

};


return (

<Container>

<Typography variant="h4">
Signup
</Typography>


<TextField
label="Email"
fullWidth
margin="normal"
onChange={(e)=>setEmail(e.target.value)}
/>


<TextField
label="Password"
type="password"
fullWidth
margin="normal"
onChange={(e)=>setPassword(e.target.value)}
/>


<Button
variant="contained"
onClick={signup}
>
Create Account
</Button>


</Container>

)

}


export default Signup;