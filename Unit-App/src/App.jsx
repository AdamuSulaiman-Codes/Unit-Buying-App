import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignIn from "./Pages/Signin";
import 'antd/dist/reset.css'; 


const App = () => {
    return (
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
    );
};

export default App;
