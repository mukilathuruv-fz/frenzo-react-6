import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>HomePage</h1>
        <Link to="/about">About Page</Link>
        {/* <a href="/about">About Page</a> */}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
