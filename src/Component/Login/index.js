import  {login}  from "../../Config/Firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password , setPassword] = useState();

    const signIn = ()=> {
        login({email , password})
    };

    return (
        <div style={{marginTop:'5rem'}}>
            <h1>Login Page</h1>
            <input placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)} /><br/>
            <input placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)}/><br/>

            <button onClick={signIn} >Login</button>

            <button onClick={()=> navigate('/signUp')} >Register</button>

        </div>
    )
}

export default Login;