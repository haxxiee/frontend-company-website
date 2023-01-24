import axios from "axios";
import { motion } from "framer-motion";
import NewsCard from "../../components/newsCard";

export default function Page({ data }: any) {
  return (
    <div className="flex flex-col justify-center items-center max-w-8xl mx- px-4">
      <div className="my-32">
        <motion.h1
          className="text-5xl font-bold my-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: "easeInOut",
          }}
        >
          Latest news and happenings
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-500 font-normal"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: "easeInOut",
          }}
        >
          Have a look at what&apos;s been happening at WebApp lately!
        </motion.p>
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
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/posts?populate=*`
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
