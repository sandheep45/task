import { Link } from "react-router-dom";
import { Products } from "../../types/product";

interface CardProps extends Products {
  index: number;
}

const Cards = ({
  _id,
  description,
  imageUrl,
  price,
  title,
  index,
}: CardProps) => {
  return (
    <div className="flex relative flex-col items-center gap-3 shadow-xl rounded-xl">
      <span className="absolute w-7 h-7 bottom-3 left-4 bg-[#ff806f] rounded-full flex items-center justify-center">
        {index + 1}
      </span>
      {title}
      <img className="object-contain" src={imageUrl} alt={title} />
      <Link
        className="absolute bottom-0 right-2 px-4 py-2"
        to={`/product/${_id}`}
      >
        Visit
      </Link>
    </div>
  );
};

export default Cards;
