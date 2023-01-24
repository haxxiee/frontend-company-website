import axios from "axios";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function Page({ data, content }: any) {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="px-4 max-w-3xl py-32">
        <p className="font-extrabold text-gray-400 text-xl">{data.location}</p>
        <h1 className="font-bold text-4xl sm:text-5xl py-2">{data.position}</h1>
        <p className="text-xl sm:text-2xl text-gray-500 text-semi">
          {data.summary}
        </p>
        <button className="py-3 px-5 sm:py-4 sm:px-6 bg-black text-white font-semibold text-lg rounded-md my-7">
          Apply Now
        </button>
      </div>
      <div className="bg-white px-4 py-16 md:p-32 shadow">
        <div className="prose text-xl max-w-3xl px-2">
          <MDXRemote {...content} />
        </div>
      </div>
      <div className="max-w-lg my-32 px-4">
        <div className="flex flex-col justify-center items-center text-center px-5">
          <h2 className="font-bold text-4xl">Apply for this position</h2>
          <p className="text-xl">
            If you&apos;re on a mission to create impact, we&apos;d love to talk
            to you and tell you more about the WebApp family.
          </p>
        </div>
        <div className="w-full flex justify-between gap-4 mt-4 [&>input]:w-full [&>input]:p-4 [&>input]:rounded-md && text-lg [&>input:hover]:shadow">
          <input
            type="text"
            placeholder="Name"
            required
            className="outline outline-1 outline-[#00000010] focus:outline-black"
          />
          <input
            type="text"
            placeholder="Email"
            required
            className="outline outline-1 outline-[#00000010] focus:outline-black"
          />
        </div>
        <div className="w-full flex justify-between gap-4 mt-4 [&>input]:w-full [&>input]:p-4 [&>input]:rounded-md && text-lg [&>input:hover]:shadow">
          <input
            type="text"
            placeholder="LinkedIn Link"
            required
            className="outline outline-1 outline-[#00000010] focus:outline-black"
          />
          <input
            type="text"
            placeholder="Portfolio Link"
            required
            className="outline outline-1 outline-[#00000010] focus:outline-black"
          />
        </div>
        <div className="w-full flex justify-between gap-4 mt-4 [&>input]:w-full [&>input]:p-4 [&>input]:rounded-md && text-lg [&>input:hover]:shadow">
          <input
            type="text"
            placeholder="Your Location"
            required
            className="outline outline-1 outline-[#00000010] focus:outline-black"
          />
        </div>
        <div className="w-full flex justify-between gap-4 mt-4 h-32 [&>textarea]:w-full [&>textarea]:p-4 [&>textarea]:rounded-md && text-lg [&>textarea:hover]:shadow">
          <textarea
            placeholder="Cover Letter"
            required
            className="outline outline-1 outline-[#00000010] focus:outline-black"
          />
        </div>
        <div className="text-right">
          <div className="p-4 mt-4 w-full text-lg text-left bg-white outline outline-1 outline-[#00000010] rounded-md">
            <p>Upload Resume</p>
          </div>
          <span className="p-1">Max file size 10MB.</span>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-8 py-4 my-4 bg-black text-white rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/jobs`);
  const data = response.data.data;
  const paths = data.map((jobs: any) => {
    return {
      params: {
        slug: jobs.attributes.slug,
      },
    };
  });
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/jobs?filters[slug][$eq]=${slug}&populate=*`
  );

  const data = response.data.data[0].attributes;
  const html = await serialize(data.content);
  return {
    props: {
      data,
      content: html,
    },
  };
}
