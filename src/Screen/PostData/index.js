import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import { postData } from "../../Config/Firebase";
import olx from '../../olx.svg'


function PostDataPage() {
    const [productName, setPostName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const navigate = useNavigate();

    const HandlePosData = async () => {
            console.log("🚀 ~ handlePostData ~ price:", image, 'llll',description)
            if (productName && description && image && price) {
    
                try {
                await postData({ productName, description, image, price });
                navigate('/');
        
                } catch(error) {
                console.log("🚀 ~ handlePostData ~ error:", error);
                }
            } else {
                alert('Please enter complete detail!');
            }
        }

    return (
        <div>
            <div style={{ textAlign: 'center' }} >
                <h1 style={{ color: 'blue' }}>Post Ad Page</h1>

                <div style={{ background: '#e5eaea', borderRadius: 5, width: 400, height: 400, margin: 'auto', }}>

                    <img src={olx} style={{ width: 75 }} /><br />
                    <p style={{ fontSize: 18, fontWeight: 500 }} >Enter Your Post Detail</p>

                    <input placeholder="Product name" onChange={(e) => setPostName(e.target.value)} style={{ width: "22rem", height: 30, borderRadius: 5, border: '1px solid black', paddingLeft: 10, marginBottom: '0.5rem' }} /><br />
                    <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} style={{ width: "22rem", height: 30, borderRadius: 5, border: '1px solid black', paddingLeft: 10, marginBottom: '0.5rem' }} /><br />
                    <input placeholder="Discription" onChange={(e) => setDescription(e.target.value)} style={{ width: "22rem", height: 30, borderRadius: 5, border: '1px solid black', paddingLeft: 10, marginBottom: '0.5rem' }} /><br />
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} /><br />

                    <button onClick={HandlePosData} style={{
                        margin: '1rem 0px 0px 0px', width: '11rem', fontWeight: 'bold', height: 30, background: '#002f34', color: 'white',
                        border: 'none', borderRadius: 5
                    }} >Post Ad</button>
                </div>
            </div>
        </div>
    )
}

export default PostDataPage;