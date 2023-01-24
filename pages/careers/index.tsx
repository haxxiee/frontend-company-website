import axios from "axios";
import Image from "next/image";
import CareerCard from "../../components/careerCard";

export default function Page({ data }: any) {
  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="max-w-3xl my-32 px-5">
        <h1 className="font-bold text-4xl sm:text-5xl">Work with U.</h1>
        <p className="text-xl sm:text-2xl my-5 text-gray-500">
          We&apos;re always looking for new additions to our team who share our
          core values, and want to make cool stuff for some sweet clients and
          partners.
        </p>
        <button className="p-4 sm:p-5 bg-black text-white rounded-lg font-semibold my-4">
          View Job Position
        </button>
      </div>
      <div className="max-w-full">
        <h2 className="px-5 md:pl-20 text-3xl sm:text-5xl mt-10 mb-32">
          But first, a little bit about us.
        </h2>
        <div className="relative">
          <Image
            src={"/career1.jpeg"}
            alt={"Office picture"}
            width={1300}
            height={500}
            priority
            className={"w-full rounded-sm"}
          />
          <div className="bg-gray-50 w-full lg:w-1/2 h-[600px] mt-20 lg:mt-0 lg:absolute bottom-0 right-0 rounded-br-sm rounded-tl-lg bg-opacity-95">
            <div className="px-5 lg:p-10">
              <h2 className="text-4xl font-bold mb-8">
                Not your ordinary tech company.
              </h2>
              <h3 className="text-2xl font-semibold">Design your career -</h3>
              <p className="text-lg mb-2">
                There&apos;s no one specific set of ingredients for success at
                WebApp. How you progress and what you aim for is up to you.
              </p>
              <h3 className="text-2xl font-semibold">Beyond tomorrow -</h3>
              <p className="text-lg mb-2">
                Each year, we invest dedicated time to master tomorrow&apos;s
                technology to meet our clients&apos; ever-changing needs.
              </p>
              <h3 className="text-2xl font-semibold">HAY Day -</h3>
              <p className="text-lg mb-2">
                No one wants to work on their birthday. So don&apos;t! Take that
                extra day off to celebrate and to spoil yourself.
              </p>
              <h3 className="text-2xl font-semibold mb-1">WebApp retreats -</h3>
              <p className="text-lg mb-4">
                Every year we go on a business retreat to kick back and learn
                from some of the best digital minds.
              </p>
              <h3 className="text-2xl font-semibold">
                Professional development -
              </h3>
              <p className="text-lg mb-2">
                Yearly budgets are made available to help you get certified, and
                to attend courses that further your uniqueness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-5xl my-48 px-4">
        <h2 className="font-semibold text-4xl mb-4 px-4">
          Now it&apos;s your turn.
        </h2>
        <p className="text-xl sm:text-2xl px-4">
          We love making new friends. See a position you can fill? Tell us about
          yourself, we’ll take it from there if we have an opening.
        </p>

        <h4 className="text-2xl font-bold mt-32 mb-10 px-4">Openings</h4>
        <div>
          {data.map((item: any) => {
            return <CareerCard key={item.slug} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const response = await axios.get(`http://0.0.0.0:1337/api/jobs`);

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
