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
        <div className="w-full p-6 md:p-4 bg-white shadow-md rounded-md my-3 hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <h4 className="text-lg md:text-xl font-semibold sm:w-72">
              {item.position}
            </h4>
            <p className="font-extrabold md:font-bold text-md md:text-lg">
              {item.location}
            </p>
            <button className="p-4 bg-black text-white text-lg rounded-lg transition hidden md:block">
              Learn More
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CareerCard;
