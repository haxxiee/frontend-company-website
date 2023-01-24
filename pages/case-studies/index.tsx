import axios from "axios";
import CasestudyCard from "../../components/casestudyCard";
import ContactForm from "../../components/ContactForm";

export default function Page({ data }: any) {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="py-28 px-5 mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold my-4">
            Launching products that scale
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 font-normal">
            WebApp partners with clients to design and develop custom mobile
            apps, websites, platforms and experiences. We work with an array of
            clients, from global brands and media properties to innovative
            startups and funded ventures.
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-10 w-full">
          {data.map((item: any) => {
            return <CasestudyCard key={item.slug} item={item} />;
          })}
        </div>
        <div className="flex px-4 flex-col justify-center items-center max-w-lg text-center mt-40 mb-10">
          <h3 className="font-bold text-4xl mb-3">Let&apos;s Talk</h3>
          <p className="text-xl text-gray-600">
            We&apos;ve worked with clients of all sizes, from enterprise brands
            to funded startups. Let&apos;s talk about your project and how we
            can help provide value.
          </p>
        </div>
      </div>
      <div className="mb-10">
        <ContactForm />
      </div>
    </>
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
