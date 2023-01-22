import Link from "next/link";
import { FC } from "react";

const CareerCard: FC<any> = ({ item }) => {
  return (
    <>
      <Link
        href={{
          pathname: "/careers/[slug]",
          query: { slug: item.slug },
        }}
      >
        <div className="w-full p-4 bg-white shadow-md rounded-md my-3 hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-semibold w-72">{item.position}</h4>
            <p className="font-bold text-lg">{item.location}</p>
            <button className="p-4 bg-black text-white text-lg rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CareerCard;
