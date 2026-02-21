import Navbar from "./components/layout/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col overflow-x-hidden">
        <Navbar />

        <main className="flex-1 px-4 sm:px-8 md:px-16 py-10 mt-5 space-y-8">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<LandingPage />} />

            {/* Product details page */}
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
