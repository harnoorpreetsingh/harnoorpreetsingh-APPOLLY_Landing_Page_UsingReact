import bg2 from "/bg2.svg";
import cmt from "/comment.svg";
import brzr from "/browser.svg";
import desig from "/vector.svg";
import cell from "/cell.png";
import eye from "/eye-scanner 1.svg";
import c from "/cell-icccc.svg";
import telem from "/telem.svg";

const Section3 = () => {
  return (
    <>
      <div
        className=" bg-cover bg-center  h-[] md:h-[1180px]  lg:h-[1620px] xl:px-40 p-[4px]"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="text text-center text-white mt-8 md:mt-12 lg:mt-24 ">
          <h1 className="lg:text-3xl text-2xl mt-2 ">APP FEATURES</h1>
          <p className="mt-4 lg:mt-6 lg:px-80 md:hidden mx-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae.
          </p>
          <p className="mt-4 hidden md:block lg:mt-6 lg:px-80 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>

          <div className="flex flex-col items-center text-center justify-center mt-12 gap-4">
            <img src={cmt} alt="" />
            <h1 className="text-2xl">FULL FREE CHAT</h1>
            <p className="w-[297px] font-light"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">


          <div className="left text-white mt-6 lg:p-8">
            <div className="lefttop text-center mt-8 justify-center items-center md:text-end  flex flex-col md:justify-end md:items-end lg:mt-16">
              <img src={brzr} alt="" className="w-[50px]"/>
              <h1 className="lg:mt-4 mt-4 lg:text-xl md:text-lg " >UNLIMITED FEATURES</h1>
              <p className="lg:mt-4 mt-4 text-sm mx-4 md:w-[220px] lg:w-[253px] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="leftbot mt-10 md:mt-44 text-center justify-center items-center lg:mt-[300px] md:text-right flex flex-col md:justify-end md:items-end">
            <img src={desig} alt="" />
            <h1 className="lg:mt-4 mt-4 lg:text-xl md:text-lg">AWESOME UI DESIGN</h1>
            <p className="lg:mt-4 mt-4 text-sm mx-4 md:w-[220px] lg:w-[260px] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>


          </div>
         

          <div className="mid md:mt-[26px] mt-10 flex lg:items-center justify-center p-3 lg:mt-8">
<img src={cell} alt="" className="rounded-lg md:h-[475px] lg:h-[700px]" />

          </div>




          <div className="right  text-white lg:p-8">

          <div className="lefttop text-center mt-8 lg:mt-20 justify-center items-center md:text-start flex flex-col md:justify-start md:items-start md:mt-12">
              <img src={c} alt="cell" className=""/>
              <h1 className="lg:mt-4 mt-4 lg:text-xl md:text-lg" >UNLIMITED FEATURES</h1>
              <p className="lg:mt-4 mx-4 font-light mt-4 text-sm md:w-[220px] lg:w-[260px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="leftbot mt-10 text-center justify-center items-center md:mt-44 md:text-start flex flex-col md:justify-start md:items-start lg:mt-[300px]">
            <img src={eye} alt="eye" />
            <h1 className="lg:mt-4 mt-4 lg:text-xl md:text-lg">RETINA READY GRAPHICS</h1>
            <p className="lg:mt-4 mx-4 font-light mt-4 text-sm md:w-[220px] lg:w-[250px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          </div>
        </div>

        <div className="flex flex-col items-center  text-center justify-center mt-9 md:mt-10 lg:mt-12 gap-4 text-white">
            <img src={telem} alt="telem" />
            <h1 className="xl:text-2xl lg:text-xl mt-4 md:text-lg">24/7 SUPPORT BY REAL PEOPLE</h1>
            <p className="lg:mt-2 mx-4 font-light mt- text-sm md:w-[180px] lg:w-[320px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <br /><br />
      </div>
    </>
  );
};

export default Section3;
