import axios from "axios";
import CasestudyCard from "../../components/casestudyCard";

export default function Page({ data }: any) {
  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
      <div className="py-28 px-10 mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold my-3">
          Launching products that scale
        </h1>
        <p className="text-2xl text-gray-500 font-normal">
          WebApp partners with clients to design and develop custom mobile apps,
          websites, platforms and experiences. We work with an array of clients,
          from global brands and media properties to innovative startups and
          funded ventures.
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-10">
        {data.map((item: any) => {
          return <CasestudyCard key={item.slug} item={item} />;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const response = await axios.get(
    `http://0.0.0.0:1337/api/case-studies?populate=*`
  );

  const rawData = response.data.data;
  const data = rawData.map((obj: any) => {
    return obj.attributes;
  });
  return {
    props: {
      data,
    },
  };
}
