import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import React from "react";
import AppointmentPopup from './blocks/AppointmentPopup';

const Layout = ({ children, footerCut = false }) => {
    const [popupOpen, setPopupOpen] = useState(false);

    return (
    <>
    <Header setPopupOpen={setPopupOpen} />
        {children}
        <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
    <Footer footerCut={footerCut} />
    </>
    )
}

export default Layout