import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const RootCompo = () => {
    return (
        <div>
            <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default RootCompo;