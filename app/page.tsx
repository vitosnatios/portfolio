'use client';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Header from './components/partials/Header/Header';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import ProgressBar from './components/progress-bar/ProgressBar';
import dynamic from 'next/dynamic';
const DarkModeFormAboutAndServies = dynamic(
  () => import('./components/darkMode/DarkModeFormAboutAndServies'),
  { ssr: false }
);

const I18nextProvider = dynamic(
  () => import('react-i18next').then((r) => r.I18nextProvider),
  { ssr: false }
);
import i18n from '@/i18n';
import Langs from './components/partials/Header/Langs';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <Home />
      <DarkModeFormAboutAndServies />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <ProgressBar />
      <Langs />
    </I18nextProvider>
  );
}

export default App;
