import Nav from "../components/Nav"
import SectionInfo from "../components/SectionInfo"
import Galery from '../components/Galery'
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <SectionInfo />
      <Galery />
      <Footer />
    </>
  )
}

export default Home