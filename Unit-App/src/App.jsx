import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </>
    );
};

export default App;
