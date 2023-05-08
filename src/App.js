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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="News" element={<News />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route
            path="terms-and-conditions "
            element={<TermsAndConditions />}
          />
          <Route path="privacy-policy" element={<PrivacyPolicies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
