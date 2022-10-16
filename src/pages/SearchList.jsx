import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const SearchList = () => {
  const { name } = useParams();
  const [search, setSearch] = useState([]);

  const getSearchR = async (name) => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      const data = await api.json();
      if (data) {
        setSearch(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchR(name);
  }, [name]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
      {search.map((item) => {
        return <Card key={item.id} recipe={item} />;
      })}
    </div>
  );
};

export default SearchList;
