import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNav from "../components/Nav";

function Layout() {
    return ( 
        <>
        <MainNav />
        <Outlet />
        <Footer />
        </>
     );
}

export default Layout;