import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };

  return (
    <div className="w-[90%] mx-auto">
      <form
        className="w-full md:w-[70%] mx-auto relative my-12 md:my-8"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search recipes"
          value={input}
          onChange={handleInput}
          className="w-full border-b-2  p-2 outline-0"
        />
        <button
          type="submit"
          className="absolute text-3xl top-1 right-0 p-1 text-slate-300"
        >
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
