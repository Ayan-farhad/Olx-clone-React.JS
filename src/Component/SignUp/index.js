import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../../Config/Firebase";
import olx from '../../olx.svg';

function Signup() {
    const navigate = useNavigate();

    const [fullname, setFullName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    // const register = ()=>{
    //     SignUp({email , password , age , fullname})
    // } 

    const register = async () => {
        await SignUp({ email, password }).then((res) => {
            console.log("🚀 ~ awaitSignUp ~ res:", res)

            navigate('/')

        }).catch(err => {
            console.log("🚀 ~ awaitSignUp ~ err:", err)
        })
    }

    return (<div>

        <div className='input' style={{ textAlign: 'center' }}>
            <h1 style={{ marginLeft: '3rem', color: 'blue' }}>Signin Page</h1>
        </div>
        <div style={{ padding: 40 }}>

            <div style={{ background: '#e5eaea', borderRadius: 5, width: 400, height: 400, margin: 'auto', }}>

                <img src={olx} style={{ width: 75 }} /><br />

                <input placeholder="Fullname" onChange={(e) => setFullName(e.target.value)} style={{
                    width: "22rem", height: 30, borderRadius: 5,
                    border: '1px solid black', paddingLeft: 10, marginBottom: '0.5rem'
                }} /><br />

                <input placeholder="Age" onChange={(e) => setAge(e.target.value)} style={{
                    width: "22rem", height: 30, borderRadius: 5,
                    border: '1px solid black', paddingLeft: 10, marginBottom: '0.5rem'
                }} /><br />

                <input placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} style={{
                    width: "22rem", height: 30, borderRadius: 5,
                    border: '1px solid black', paddingLeft: 10, marginBottom: '0.5rem'
                }} /><br />

                <input type="password" placeholder="Enter PAssword" onChange={(e) => setPassword(e.target.value)} style={{
                    width: "22rem", height: 30, borderRadius: 5,
                    border: '1px solid black', paddingLeft: 10, marginBottom: '0.5rem'
                }} /><br />
                <button onClick={register} style={{
                    margin: '1rem 0px 0px 0px', width: '11rem', fontWeight: 'bold', height: 30, background: 'aquamarine',
                    border: 'none', borderRadius: 5
                }} >Signup</button>



                <p style={{ fontSize: 14 }}>
                    Already have an account.
                    <span onClick={() => navigate('/Login')} style={{ color: "blue" }} > SignIn</span>
                </p>

            </div>
        </div>
    </div>
    )

}

export default Signup;