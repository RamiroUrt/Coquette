import CataloguesViewsCasamiento from './pages/views/CataloguesViewsCasamiento';
import Catalogue from './pages/Catalogue'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import CataloguesViewsGraduates from './pages/views/CataloguesViewsGraduates';
import CataloguesViewsQuinceaños from './pages/views/CataloguesViewsQuinceaños';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalogue' element={<Catalogue />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/catalogues-casamiento" element={<CataloguesViewsCasamiento />} />
      <Route path="/catalogues-graduacion" element={<CataloguesViewsGraduates />} />
      <Route path="/catalogues-quinceaños" element={<CataloguesViewsQuinceaños />} />
    </Routes>
    </>
  )
}

export default App
