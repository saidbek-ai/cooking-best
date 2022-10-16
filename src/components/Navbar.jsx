import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FaLeaf, FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu, GiNoodles } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav((prev) => {
      return !prev;
    });
  };

  return (
    <nav className="md:min-h-screen flex flex-col">
      <div className="md:hidden w-[90%] mx-auto">
        <div className="flex justify-between items-center py-4">
          <h2 className=" text-2xl text-black font-black">
            <Link to="/">Cooking Best</Link>
          </h2>
          <GiHamburgerMenu size={24} onClick={handleNav} />
        </div>
      </div>
      <div
        className={
          nav
            ? "mx-auto hidden md:inline mt-4"
            : "mx-auto md:inline md:h-screen"
        }
      >
        <h2 className="text-2xl text-black font-black py-4 md:block hidden">
          <Link to="/">Cooking Best</Link>
        </h2>

        <ul className="flex flex-col mb-6 mt-8">
          <h3 className="text-slate-400 text-xl mb-4">Discover</h3>
          <NavLink
            to="/"
            className="text-xl text-black  flex gap-4 items-center py-2 active:text-violet-500"
          >
            <AiFillStar /> Popular
          </NavLink>
          <NavLink
            to="/veggie"
            className="text-xl text-black  flex gap-4 items-center py-2 active:text-violet-500"
          >
            <FaLeaf /> Veggie
          </NavLink>
        </ul>
        <ul className="flex flex-col">
          <h3 className="text-slate-400 text-xl mb-4">Cuisine</h3>
          <NavLink
            to="/cuisine/american"
            className="text-xl text-black  flex gap-4 items-center py-2 active:text-violet-500"
          >
            <FaHamburger /> American
          </NavLink>

          <NavLink
            to="/cuisine/italian"
            className="text-xl text-black  flex gap-4 items-center py-2 active:text-violet-500"
          >
            <FaPizzaSlice /> Italian
          </NavLink>
          <NavLink
            to="/cuisine/thai"
            className="text-xl text-black flex gap-4 items-center py-2 active:text-violet-500"
          >
            <GiNoodles /> Thai
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
