import Header from "./components/Header"
import Hero from "./components/Hero"
import PhotoGallery from "./components/PhotoGallery"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import './App.css'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <PhotoGallery/>
        <About/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
