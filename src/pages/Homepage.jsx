import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Section from "../components/Section";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Homepage = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element={<Header />} />
            <Route path="/" element={<Section />} />
            <Route path="/" element={<Footer />} />
            </Route>
        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Homepage;