import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Cuisine = () => {
  const { type } = useParams();

  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (cu) => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cu}&number=9`
      );
      const data = await api.json();
      if (data) {
        setCuisine(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCuisine(type);
  }, [type]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
      {cuisine.map((item) => (
        <Card key={item.id} recipe={item} />
      ))}
    </div>
  );
};

export default Cuisine;
