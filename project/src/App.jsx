import Footer from "./components/layout/footer/Footer";
import Home from "./components/pages/home/Home";
import Nav from "./components/layout/nav/Nav";

/*=============== STYLES ===============*/

import "./components/pages/home/home.css";
import "./components/layout/footer/footer.css";
import "./components/layout/nav/nav.css";


function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
