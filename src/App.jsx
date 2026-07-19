import "./App.css";
import Nav from "./component/Nav";
import Quote from "./component/Quote";
import Home from "./component/Home";
import Footer from "./component/Footer"

function App() {
  return (
    <>
      <Nav />

      {/* Body*/}
      <Home />
      <Quote />
      <Footer />
    </>
  );
}
console.log("y 'r u her-e");

export default App;
