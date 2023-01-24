import axios from "axios";
import NewsCard from "../../components/newsCard";

export default function Page({ data }: any) {
  return (
    <div className="flex flex-col justify-center items-center max-w-8xl mx- px-4">
      <div className="my-32">
        <h1 className="text-5xl font-bold my-4">Latest news and happenings</h1>
        <p className="text-2xl text-gray-500 font-normal">
          Have a look at what&apos;s been happening at WebApp lately!
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 w-full">
        {data.map((item: any) => {
          return <NewsCard key={item.title} item={item} />;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const response = await axios.get(`http://0.0.0.0:1337/api/posts?populate=*`);

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
