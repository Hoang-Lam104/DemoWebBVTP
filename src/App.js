import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
import PostList from "./pages/listPost";
import DoctorProfile from "./pages/doctorProfile";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import "./App.css";
import { useState, useEffect } from "react";
import { getConfiguration } from "./api/configurationApi";
import Departments from "./pages/departments";

export default function App() {
    const [configuration, setConfiguration] = useState({});

    useEffect(() => {
        getConfiguration().then((response) => {
            setConfiguration(response.data);
        });
    }, []);

    return (
        <>
            <Header config={configuration} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tin-tuc/:id" element={<Post />} />
                <Route path="/danh-sach-tin-tuc/:id" element={<PostList />} />
                <Route path="/chuyen-khoa/:id" element={<Departments />} />
                <Route path="/bac-si/:id" element={<DoctorProfile />} />
            </Routes>
            <Footer config={configuration} />
        </>
    );
}
