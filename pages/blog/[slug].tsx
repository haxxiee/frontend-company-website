import axios from "axios";

interface Props {
  title: string;
  blogPost: string;
}

export default function Page({ post }: any) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.blogPost}</p>
      hello
    </div>
  );
}

export async function getStaticPaths() {
  const response = await axios.get("http://0.0.0.0:1337/api/tests");
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
    `http://0.0.0.0:1337/api/tests?filters[slug][$eq]=${slug}`
  );

  const { title, blogPost } = response.data.data[0].attributes;
  return {
    props: {
      post: {
        title,
        blogPost,
      },
    },
  };
}
