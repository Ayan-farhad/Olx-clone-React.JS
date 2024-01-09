import Cards from "./Cards";
import { useEffect, useState } from "react";
import Navbar from "../../Navbar";
// import DetailScreen from "../../../Screen/DetailScreen";
import Footer from "../../Footer";

function DashBoard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then(res => {
                console.log(res);
                setProducts(res.products);
            })
    }

    return (
        <div className="App">
            <div className="App-header">

                <Navbar/>

                {products.map(item => {
                    const { price, description, images , title , id} = item
                    return <Cards price={price} description={description} images={images} title={title} id={id}  />
                    
                })}

                <Footer/>

            </div>
        </div>
    )
}

export default DashBoard;