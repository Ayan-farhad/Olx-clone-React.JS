import { Route , Routes } from "react-router-dom";
import DashBoard from '../Component/Views/Dashboard'
import DetailScreen from "../Screen/DetailScreen";
import Login from "../Component/Login";
import SignUp from "../Component/SignUp";

function Router(){
    return (
        <Routes>
            <Route>
                <Route path="/" element={<DashBoard/>}/>
                <Route path="/DetailScreen/:adId" element={<DetailScreen/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
            </Route>
        </Routes>
    )
}

export default Router;