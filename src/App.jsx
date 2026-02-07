import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Service = lazy(() => import("./pages/Service/Service"));
const ServiceDetails = lazy(() => import("./pages/Service/ServiceDetails"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Team = lazy(() => import("./pages/Team/Team"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const PortfolioDetails = lazy(
  () => import("./pages/Portfolio/PortfolioDetails"),
);
const Job = lazy(() => import("./pages/Job/Job"));
const JobDetails = lazy(() => import("./pages/Job/JobDetails"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const ShopTwo = lazy(() => import("./pages/Shop/Shoptwo"));
const ShopDetails = lazy(() => import("./pages/Shop/ShopDetails"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const AdminLogin = lazy(() => import("./pages/Admin/Login"));
const AdminDashboard = lazy(() => import("./pages/Admin/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
    }}
  >
    <div className="spinner"></div>
  </div>
);

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

function AppInner() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <>
      {/** Restore old preloader behavior: show on initial load, then remove */}
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      {!isAdmin && <Header />}

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/job" element={<Job />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-two" element={<ShopTwo />} />
          <Route path="/shop-details" element={<ShopDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
      {!isAdmin && <ScrollUp />}
    </>
  );
}


export default App;
