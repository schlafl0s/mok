import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, footerCut = false  }) => {
    return (
    <>
    <Header />
        {children}
    <Footer footerCut={footerCut} />
    </>
    )
}

export default Layout