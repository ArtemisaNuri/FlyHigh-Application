import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { SearchForm } from "./Pages/SearchForm";
import Results from "./Pages/Results";
import HomePage from "./Pages/Home";
import TripsPage from "./Pages/ExplorePage";
import AboutPage from "./Pages/About";


const App = () => {
  return (
    <div className="min-h-screen flex  bg-slate-900 flex-col ">
      <Router>
        <Header />

        <main className="flex-1 w-full">
          <Toaster />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/search" element={<SearchForm />} />
            <Route path="/results" element={<Results />} />
            <Route path="/explore-more" element={<TripsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
