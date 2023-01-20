import { FC } from "react";

const CareerCard: FC<any> = ({ item }) => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-md my-3">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-semibold pr-32">{item.position}</h4>
        <p className="font-bold text-lg">{item.location}</p>
        <button className="p-4 bg-black text-white text-lg rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CareerCard;
