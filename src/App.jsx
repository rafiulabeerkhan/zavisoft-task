import Navbar from "./components/layout/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 px-4 sm:px-8 md:px-16 py-10 mt-5 space-y-8">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
