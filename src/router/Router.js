import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import { Home, Login, Profil } from "../pages";

const Router = (props) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profil" element={<Profil/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;