import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

function App() {
  return (
    <div>
      <div
        className=" m-0 pt-0 "
        style={{ fontFamily: '"Josefin Sans", sans-serif' }}
      >
        <Section1 />
         <Section2 />
        
        <Section3 />
         
        <Section4 />
        
        <Section5 />
        
        <Section6 />
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
