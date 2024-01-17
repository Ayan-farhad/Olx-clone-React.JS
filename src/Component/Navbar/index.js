import olxtop from '../../olx top.svg'
import olx from '../../olx.svg'
import car from '../../car-front.svg'
import building from '../../building.svg'
import search from '../../search.svg'
import sellicon from '../../sellicon.svg'
import { useNavigate } from 'react-router-dom'


function Navbar() {
    const navigate = useNavigate();

    return (<div>
        <div style={{ height: '7rem', }} ></div>

        <nav  style={{ backgroundColor: "rgb(241, 239, 239)", position: "fixed", top: 0, width: "100%" }}>
            <div style={{ display: "flex" }}>

                <img style={{ width: 40, marginLeft: 40, }} src={olxtop} ></img>

                <img style={{ marginLeft: '2rem' }} src={car} ></img>
                <p> MOTORS </p>
                <img style={{ marginLeft: '2rem' }} src={building} ></img>
                <p > PROPERTY </p>
            </div>
            <div className='input' style={{ display: "flex", paddingLeft: '2rem', paddingBottom: 10 }}>
                <img style={{ width: 60, }} src={olx} ></img>
                <input style={{ width: '16rem', height: '2.3rem', marginLeft: 20, marginTop: 6, border: '2px solid black', borderRadius: 5, paddingLeft: 8 }} placeholder='Pakistan' ></input>

                <input  className='SearchInp' style={{ width: '40rem', height: '2.3rem', marginLeft: 18, marginTop: 6, border: '2px solid black', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, paddingLeft: 8 }} placeholder="Find Cars, Mobile Phones and more..." ></input>
                <img style={{ background: 'black', width: 50, height: 42.5, marginTop: 5.8, borderTopRightRadius: 5, borderBottomRightRadius: 5 }} src={search} ></img>
                <button onClick={() => navigate('/Login')} style={{ marginLeft: '1rem', marginRight: '1rem', border: 'none', fontSize: 20, fontWeight: 'bolder' }} ><u>Login</u></button>


                <img src={sellicon} style={{ width: '5.5rem'}}></img>

            </div>


        </nav>
        <div style={{ display: "flex", padding: '15px' }}>
            <p style={{ margin: "0 8px" }}>ALL catogary</p>
            <p style={{ margin: "0 8px" }}> Mobile Phones</p>
            <p style={{ margin: "0 8px" }}>Car</p>
            <p style={{ margin: "0 8px" }}>Motorscycle</p>
            <p style={{ margin: "0 8px" }}>Houses</p>
            <p style={{ margin: "0 8px" }}>Video-Audios</p>
            <p style={{ margin: "0 8px" }}>Tablets</p>
            <p style={{ margin: "0 8px" }}>Land&Plots</p>



        </div>

    </div>
    )
}

export default Navbar;