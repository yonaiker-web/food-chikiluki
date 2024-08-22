import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <Layout>
      <Hero>
        <Navbar />
        <Header />
      </Hero>
      <Welcome />
      <Footer />
    </Layout>
  );
}

export default App;
