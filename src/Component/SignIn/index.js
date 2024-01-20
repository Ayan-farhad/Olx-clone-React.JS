import { useState , useEffect } from "react";
import { login } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";
import olxtop from '../../olx top.svg';
import olx from '../../olx.svg'



function SignIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    


    const Login = async () => {
        await login({ email, password }).then((res) => {
            console.log("🚀 ~ awaitlogin ~ res:", res)
            if (res && res.user) {

                navigate('/')
            }

        }).catch(err => {
            console.log("🚀 ~ awaitlogin ~ err:", err)

        })
    }
    return (<div>
       
            <div className='input' style={{textAlign:'center'}}>
                <h1 style={{ color:'blue'}}>Login Page</h1>
            </div>

        <div style={{ padding: 50 }} >
            <div style={{ background: '#e5eaea', borderRadius: 5, width: 400, height: 400, margin: 'auto' }} >

                <img src={olx} style={{ width: 75 }} /><br />
                <p style={{ fontSize: 18, fontWeight: 500 }} >Enter Your Email Password</p>

                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{
                    width: "22rem", height: 30, borderRadius: 5,
                    border: '1px solid black', paddingLeft: 10, marginBottom: '0.5rem'
                }} /><br />

                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" style={{
                    width: "22rem", height: 30,
                    borderRadius: 5, border: '1px solid black', paddingLeft: 10
                }} /><br />

                
                <button onClick={Login} style={{
                    margin: '1rem 0px 0px 0px', width: '11rem', fontWeight: 'bold', height: 30, background: '#002f34', color:'white' ,
                    border: 'none', borderRadius: 5
                }} >Login</button>

                <p style={{ fontSize: 14 }} >
                    Don't you have an account.
                    <span onClick={() => navigate('/register')} style={{ color: "blue" }} > SignUp</span>
                </p>
            </div>
        </div>
    </div>
    )

}

export default SignIn;