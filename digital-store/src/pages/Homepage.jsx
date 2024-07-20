import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";

const Homepage = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Header />} />
        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Homepage;