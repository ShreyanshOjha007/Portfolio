import './App.css'
import {Routes} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import {Toaster} from "react-hot-toast";

function App() {
    return (
        <>
            <Toaster/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
 }

export default App
