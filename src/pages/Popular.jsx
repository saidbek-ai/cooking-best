import { useState, useEffect } from "react";
import Card from "../components/Card";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      if (data) {
        setPopular(data.recipes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
      {popular.map((item) => {
        return <Card key={item.id} recipe={item} />;
      })}
    </div>
  );
};

export default Popular;
