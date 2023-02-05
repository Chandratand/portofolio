import AboutMe from "../components/organism/AboutMe";
import Hero from "../components/organism/Hero";
import Layout from "../components/organism/Layout";
import Portofolio from "../components/organism/Portofolio";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Portofolio />
    </Layout>
  );
}
