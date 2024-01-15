import { useState } from "react"
import { login } from "../../Config/Firebase"
import { useNavigate } from "react-router-dom"




function SignIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const Login = () => {
        login({ email, password })
    }
    return (
        <div>
            <h1>login</h1>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <br />
            <button onClick={Login} >Login</button>
            <p>
                dont you have account.
                <span onClick={() => navigate('/register')} >click here</span>
            </p>

        </div>
    )

}

export default SignIn;