import Cards from "./Cards";
import { useEffect, useState } from "react";
import Navbar from "../../Navbar";
// import DetailScreen from "../../../Screen/DetailScreen";
import Footer from "../../Footer";
import Category from "../../Category";
import BackToTop from "../../../Screen/DetailScreen/BackToTop";
import { getAds } from "../../../Config/Firebase";

function DashBoard() {
    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        getProducts();
    }, [])
   

    const getProducts = async () => {
        const ads = await getAds();
        console.log('ads in component', ads);
        setProducts(ads);
    }

    return (
        <div className="App">
            <div className="App-header">

                <Navbar />

                <Category /><br /><br />

                {products.map(item => {
                    console.log("🚀 ~ Dashboard ~ item:", item)
                    return <Cards item={item} />
                })}<br /><br /><br />

            </div>
            <BackToTop />
            <Footer />

        </div>
    )
}

export default DashBoard;