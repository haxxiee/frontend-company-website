import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const CasestudyCard: FC<any> = ({ item }) => {
  return (
    <div
      className="group flex flex-col justify-center w-[350px] sm:w-auto sm:max-w-2xl text-white rounded-md hover:scale-[99%] duration-500"
      style={{ backgroundColor: `${item.colorHex}` }}
    >
      <Link
        href={{
          pathname: "/case-studies/[slug]",
          query: { slug: item.slug },
        }}
      >
        <div>
          <div className="p-4 w-[350px] sm:w-[500px]">
            <Image
              src={item.mainImage.data.attributes.url}
              alt="Image of company product"
              width={500}
              height={500}
              className="w-auto h-auto rounded-md"
              priority
            />
          </div>
          <div className="m-10">
            <h1 className="font-bold text-4xl">{item.companyName}</h1>
            <p>{item.companyDescription}</p>
            <div className="w-16 h-[1px] my-7 bg-white"></div>
            <div className="flex items-center gap-2">
              <p className="font-semibold">View case study</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-25 group-hover:opacity-100 transition-all"
              >
                <path
                  d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CasestudyCard;
