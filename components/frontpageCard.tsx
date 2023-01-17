import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const FrontpageCard: FC<any> = ({ item }) => {
  return (
    <div className="px-5">
      <div
        className={`max-w-[85rem] mx-auto bg-slate-600 mb-10 h-[600px] rounded-lg text-white`}
        style={{ backgroundColor: `${item.colorHex}` }}
      >
        <Link
          href={{
            pathname: "/case-studies/[slug]",
            query: { slug: item.slug },
          }}
        >
          <div className="flex flex-col-reverse items-center justify-between md:flex-row">
            <div className="mx-auto">
              <h2>{item.companyName}</h2>
              <p>{item.companyDescription}</p>
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
