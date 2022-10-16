import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Popular from "./Popular";
import Search from "../components/Search";
import Veggie from "./Veggie";
import Cuisine from "./Cuisine";
import SearchList from "./SearchList";
import Footer from "../components/Footer";
import Recipe from "./Recipe";

const Pages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
      <div className="grid grid-cols">
        <Navbar />
      </div>
      <div className="md:col-span-3 lg:col-span-4 md:border-l-2">
        <Search />
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/veggie" element={<Veggie />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/search/:name" element={<SearchList />} />

          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </div>
      <div className="md:col-span-4 lg:col-span-5">
        <Footer />
      </div>
    </div>
  );
};

export default Pages;
