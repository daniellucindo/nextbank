import { useRouter } from "next/router";
import Head from "next/head";
import PostContent from "../../components/PostContent"; // Apenas o conteúdo do post
import { formatSlug } from "../../utils/formatSlug";
import Layout from "../../components/Layout"; // Importando o Layout

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div style={{ textAlign: "center", marginTop: "20px" }}>Carregando...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>Post - {post.title}</title>
        <meta name="description" content={post.body.substring(0, 150)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.body.substring(0, 150)} />
        <meta property="og:url" content={`https://meusite.com/post/${formatSlug(post.title)}`} />
      </Head>
      <PostContent post={post} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: formatSlug(post.title) },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const post = posts.find((p) => formatSlug(p.title) === params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 10,
  };
}
