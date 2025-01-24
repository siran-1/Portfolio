import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from "./components/Header"
import Hero from "./components/Hero"
import PhotoGallery from "./components/PhotoGallery"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Blog from './components/Blog';

import './App.css'

const blogFetch = async () => {
    const apiKey = 'AIzaSyDvFyLdpfQRQLJUYSN6A929QNz9ZYVF3rg';
    const spreadsheetId = '1nUaHsk6prEpsr85IOWl1WF_3rqaufB6Jtk7komY7Ch4';
    const range = 'Sheet1!A2:D';

    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`);
        const data = await response.json();
        return data.values;
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

function App() {
    const [blogData, setBlogData] = useState(null);
    useEffect(() => {
        (async () => {
            const data = await blogFetch();
            setBlogData(data);
        })();
    }, [])

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <main>
                        <Hero />
                        <PhotoGallery />
                        <About />
                        <Work />
                        {blogData !== null && <Blog posts={blogData} origin={'home'} />}
                        <Contact />
                        <Footer />
                    </main>
                } />
                <Route path="/blog" element={<Blog posts={blogData} origin={'blog'} />} />
            </Routes>
        </>
    )
}

export default App
