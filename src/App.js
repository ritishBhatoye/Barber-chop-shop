import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from 'react-router-dom';
// import HomePages from "./components/pageContent/homePages";
// import Header from './components/home/Header';
import { Contact } from './components/Contact/Contact';
// import { Footer } from './components/Footer/Footer';
import { Home } from './components/home/home';
import News from './components/News/News';
import Menu from './components/Menu';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import PrivacyPolicies from './components/PrivacyPolicies';
import TermsAndConditions from './components/TermsAndConditions';
import Reservation from './components/Reservation';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route
            path="terms-and-conditions "
            element={<TermsAndConditions />}
          />
          <Route path="privacy-policy" element={<PrivacyPolicies />} />
          <Route path="reservation" element={<Reservation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
