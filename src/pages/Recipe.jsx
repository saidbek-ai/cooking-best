import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState(true);

  const handleChange = () => {
    setActive((prev) => {
      return !prev;
    });
  };

  const getRecipe = async (id) => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();
      if (data) {
        setRecipe(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  const { title, image, extendedIngredients, instructions, summary } = recipe;

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-xl text-center text-black mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <img src={image} alt="" className="rounded-2xl w-full" />
        <div className="">
          <div className="grid grid-cols-2 gap-4 mx-auto my-4 md:mt-0">
            <button
              onClick={handleChange}
              className={
                active
                  ? "btn active py-2 px-6 bg-black rounded-xl text-white"
                  : "btn active py-2 px-6 bg-transparent border-2 border-black rounded-xl text-black"
              }
            >
              Ingredients
            </button>
            <button
              onClick={handleChange}
              className={
                !active
                  ? "btn active py-2 px-6 bg-black rounded-xl text-white"
                  : "btn active py-2 px-6 bg-transparent border-2 border-black rounded-xl text-black"
              }
            >
              Instructions
            </button>
          </div>
          {!active ? (
            <div className="">
              <p
                className="text-md pb-2 mb-2  border-b-2"
                dangerouslySetInnerHTML={{ __html: summary }}
              ></p>
              <p
                className="text-md"
                dangerouslySetInnerHTML={{ __html: instructions }}
              ></p>
            </div>
          ) : (
            <ul className="text-black leading-10 text-center">
              {extendedIngredients?.map((ingredient, index) => {
                return (
                  <li className="" key={index}>
                    {ingredient.original}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
