import axios from "axios";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Page({ data }: any) {
  const moreRef = useRef<any>(null);

  const handleRefClick = () => {
    moreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full relative">
        {/* Circle below */}
        <div
          className="absolute inset-x-0 m-auto -z-10 w-full h-[400px] md:w-[700px] md:h-[700px] inset-y-0 md:rounded-full"
          style={{ backgroundColor: `${data.colorHex}30` }}
        />
        <div className="flex justify-center items-center px-4 h-[90vh]">
          <div className="my-40 max-w-lg">
            <h1 className="font-bold text-2xl">{data.companyName}</h1>
            <p className=" text-4xl md:text-5xl mt-4">
              {data.companyDescription}
            </p>
            <div
              className="flex items-center justify-center gap-2 mt-16"
              onClick={handleRefClick}
            >
              <p className="font-semibold text-xl">See More</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-bounce"
              >
                <path
                  d="M14.8284 12.0259L16.2426 13.4402L12 17.6828L7.75733 13.4402L9.17155 12.0259L11 13.8544V6.31724H13V13.8544L14.8284 12.0259Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row max-w-5xl px-5 md:px-20 mt-32"
        ref={moreRef}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="sm:mr-10 md:mr-48">
          <h2 className="font-semibold text-3xl">
            THE
            <br />
            CHALLENGE
          </h2>
          <div className="w-16 h-[1px] my-7 bg-black" />
        </div>
        <p className="text-xl text-gray-600">{data.challenge}</p>
      </motion.div>
      <motion.div
        className="flex items-center flex-col-reverse sm:flex-row max-w-5xl mt-48 sm:px-20"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
      >
        <div className="w-auto px-5 my-6 sm:my-0 sm:w-[500px] sm:pr-10">
          <h2 className="font-semibold text-3xl">
            THE
            <br />
            SOLUTION
          </h2>
          <div className="w-16 h-[1px] my-7 bg-black" />
          <p className="text-xl text-gray-600">{data.solution}</p>
        </div>
        <div className="w-[350px] sm:w-auto sm:-mr-20">
          <Image
            src={data.imageOne.data.attributes.url}
            alt={"Image of case study product"}
            width={500}
            height={500}
          />
        </div>
      </motion.div>

      <motion.div
        className="my-52 w-[800px] sm:w-auto sm:max-w-7xl sm:px-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
      >
        <Image
          src={data.imageTwo.data.attributes.url}
          alt={"Image of case study product"}
          width={1200}
          height={1000}
          className="w-auto h-auto"
        />
      </motion.div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/case-studies`
  );
  const data = response.data.data;
  const paths = data.map((posts: any) => {
    return {
      params: {
        slug: posts.attributes.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/case-studies?filters[slug][$eq]=${slug}&populate=*`
  );

  const data = response.data.data[0].attributes;
  return {
    props: {
      data,
    },
  };
}
