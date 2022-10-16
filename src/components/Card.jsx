import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  return (
    <div className="relative rounded-2xl">
      <Link to={"/recipe/" + recipe.id}>
        <img
          src={recipe.image}
          alt=""
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="bg-gradient-to-t from-black to-white absolute top-0 bottom-0 right-0 left-0 opacity-30 w-full h-full rounded-2xl"></div>
        <h2 className="text-lg absolute bottom-0 right-0 left-0 text-center z-40 py-4 text-white ">
          {recipe.title}
        </h2>
      </Link>
    </div>
  );
};

export default Card;
