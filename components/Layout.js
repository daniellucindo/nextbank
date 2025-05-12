import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NextBank - Home</title>
        <meta name="description" content="Página inicial do NextBank com Next.js e MUI 5." />
        <meta property="og:title" content="NextBank - Home" />
        <meta property="og:description" content="Veja as novidades do NextBank!" />
      </Head>
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
}
