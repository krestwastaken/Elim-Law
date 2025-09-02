import { Routes, Route } from 'react-router-dom';

import Team from './Pages/Team.jsx';
import AboutUs from './Pages/AboutUs.jsx'
import PracticeAreas from './Pages/PracticeAreas.jsx';
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx'

const App = () => {
    
    return (        
        <div className="min-h-screen bg-white">
            <ScrollToTop />
            <Header/>            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/practice-areas' element={<PracticeAreas />} />
                <Route path='/teams' element={<Team />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
                
            <Footer/>
        </div>        
    );
}
export default App
