import About from "../../components/About";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Portfolio from "../../components/Portfolio";
import data from "../../utils/userData";

export default function Home() {
  return (
    <>
      <Layout title="portfolio">
        <Hero data={data} />
        <About data={data} />
        <Portfolio />
        <Contact />
      </Layout>
    </>
  );
}
