import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import FrontpageCard from "../components/frontpageCard";

export default function Home({ data }: any) {
  return (
    <>
      <Head>
        <title>WebApp Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="max-w-[76rem] mx-auto px-4">
        <div className="flex flex-col justify-center max-w-4xl py-64 mx-auto">
          <h1 className="font-bold text-5xl md:text-7xl">
            Build. Launch. Grow.
          </h1>
          <p className="text-xl md:text-2xl font-medium py-2 text-gray-500 max-w-xl">
            WebApp crafts award-winning mobile and web experiences driven by
            strategy, design and technology.
          </p>
          <div className="font-semibold text-lg md:text-2xl mt-5 flex items-center">
            <Link href={"/case-studies"}>
              <div className="flex items-center group">
                <h3>See Our Work</h3>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-1 text-gray-400 group-hover:text-black transition-all"
                >
                  <path
                    d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {data.map((item: any) => {
        return <FrontpageCard key={item.slug} item={item} />;
      })}

      <div className="flex flex-col justify-center items-center max-w-lg text-center mt-40 mb-10 mx-auto">
        <h3 className="font-bold text-4xl mb-3">Let&apos;s Talk</h3>
        <p className="text-xl text-gray-600 px-4">
          We&apos;ve worked with clients of all sizes, from enterprise brands to
          funded startups. Let&apos;s talk about your project and how we can
          help provide value.
        </p>
      </div>
      <ContactForm />
    </>
  );
}

export async function getStaticProps(context: any) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/case-studies?populate=*`
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
