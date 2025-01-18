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

function App() {
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
                        <Contact />
                        <Footer />
                    </main>
                } />
                <Route path="/blog/:id" element={<Blog />} />
            </Routes>
        </>
    )
}

export default App
