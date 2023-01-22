import axios from "axios";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function Page({ data, content }: any) {
  return (
    <div className="">
      <div className="flex justify-center items-center w-full h-[70px] bg-blue-300 ">
        <h1 className="font-bold text-3xl text-white">WebApp Blog</h1>
      </div>
      <div className="flex flex-col justify-center items-center max-w-4xl px-5 mx-auto">
        <h1 className="font-bold text-3xl mt-20 mb-10">{data.title}</h1>
        <p className="text-blue-500 my-2">{data.date}</p>

        <p className="text-lg font-semibold">{data.summary}</p>
        <div className="my-10 w-full h-[1px] bg-blue-200" />
        <div className="prose text-lg max-w-4xl ">
          <MDXRemote {...content} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await axios.get("http://0.0.0.0:1337/api/posts");
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
    `http://0.0.0.0:1337/api/posts?filters[slug][$eq]=${slug}&populate=*`
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
