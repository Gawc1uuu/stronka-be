import CenteredHeaderImageLeft from "./components/CenteredHeaderImageLeft"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ServicesGrid from "./components/ServicesGrid"
import TextLeftImageRight from "./components/TextLeftImageRight"

function App() {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <TextLeftImageRight/>
    <CenteredHeaderImageLeft/>
    <ServicesGrid/>
    <Footer/>
    </>
  )
}

export default App
