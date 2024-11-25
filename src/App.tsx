import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/global";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import MessageDetails from "./pages/MessageDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <PortfolioSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute redirectTo="/login" />}>
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:id" element={<MessageDetails />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
