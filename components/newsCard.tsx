import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const NewsCard: FC<any> = ({ item }) => {
  return (
    <>
      <Link
        href={{
          pathname: "/news/[slug]",
          query: { slug: item.slug },
        }}
      >
        <div className="max-w-xl shadow-md">
          <div className="">
            <Image
              src={item.image.data.attributes.url}
              alt="Image of news picture"
              width={500}
              height={500}
              className="h-80 object-cover"
              priority
            />
          </div>
          <div className="p-5">
            <h1 className="font-semibold text-lg">{item.title}</h1>
            <div className="flex justify-between">
              <p>{item.date}</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewsCard;
