import Container from "@mui/material/Container";
import Hero from "../components/Hero";
import CardSection from "../components/CardSection";
import AboutUs from "../components/AboutUs";
import HomeContent from "../components/HomeContent";
import Layout from "../components/Layout";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts: posts.slice(0, 5) },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <Hero />
      <section>
        <CardSection />
      </section>
      <Container maxWidth="lg">
        <section>
          <AboutUs />
        </section>
        <HomeContent posts={posts} />
      </Container>
    </Layout>
  );
}
