import { useState } from "react";
import { signUp } from "../../Config/Firebase";

function SignUp(){
    const [fullName , setFullname] = useState();
    const [age , setAge] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const register = () =>{
        signUp({email , password , age, fullName})
    }

    return <div>
        <h1>SignUp page</h1>

        <input placeholder="Enter FullName" />
        <input placeholder="Enter Age" />
        <input placeholder="Enter email" />
        <input placeholder="Enter password" />

        <button onClick={register} >SignUp</button>
    </div>
}

export default SignUp;