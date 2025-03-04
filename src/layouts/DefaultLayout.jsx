import { Outlet } from "react-router-dom";

// importo componenti
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};