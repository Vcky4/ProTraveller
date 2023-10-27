import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/about' element={<About />} />
        <Route path='/FAQ' element={<FAQ />} /> */}
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
