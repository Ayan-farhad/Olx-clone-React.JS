import { Route , Routes } from "react-router-dom";
import DashBoard from '../Component/Views/Dashboard'
import DetailScreen from "../Screen/DetailScreen";
import SignUp from "../Component/SignUp";
import SignIn from "../Component/SignIn";

function Router(){
    return (
        <Routes>
            <Route>
                <Route path="/" element={<DashBoard/>}/>
                <Route path="/DetailScreen/:adId" element={<DetailScreen/>}/>
                <Route path="/Login" element={<SignIn/>} />
                <Route path="/register" element={<SignUp/>} />
            </Route>
        </Routes>
    )
}

export default Router;