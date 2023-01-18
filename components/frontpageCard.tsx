import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const FrontpageCard: FC<any> = ({ item }) => {
  return (
    <div className="px-5">
      <div
        className={`group max-w-[85rem] mx-auto bg-slate-600 mb-10 h-[600px] rounded-lg text-white hover:opacity-95 transition shadow-md`}
        style={{ backgroundColor: `${item.colorHex}` }}
      >
        <Link
          href={{
            pathname: "/case-studies/[slug]",
            query: { slug: item.slug },
          }}
        >
          <div className="flex flex-col-reverse items-center md:flex-row">
            <div className="mx-auto">
              <h2 className="text-5xl font-bold">{item.companyName}</h2>
              <p className="text-lg my-3">{item.companyDescription}</p>
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="mx-auto w-96 md:w-auto">
              <Image
                src={item.mainImage.data.attributes.url}
                alt="Image of company product"
                width={600}
                height={500}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FrontpageCard;
