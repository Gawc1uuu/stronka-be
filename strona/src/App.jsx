import CenteredHeaderImageLeft from "./components/CenteredHeaderImageLeft"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ServicesGrid from "./components/ServicesGrid"
import TextLeftImageRight from "./components/TextLeftImageRight"
import "./App.css"

function App() {
  return (
    <div className="font-montserrat">
    <Navbar />
    <HeroSection/>
    <TextLeftImageRight/>
    <CenteredHeaderImageLeft/>
    <ServicesGrid/>
    <Footer/>
    </div>
  )
}

export default App
