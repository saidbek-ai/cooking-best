import { useEffect, useState } from "react";
import Card from "../components/Card";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      if (data) {
        setVeggie(data.recipes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
      {veggie.map((item) => {
        return <Card key={item.id} recipe={item} />;
      })}
    </div>
  );
};

export default Veggie;
