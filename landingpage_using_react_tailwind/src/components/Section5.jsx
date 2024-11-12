import vididspl from "/vididspl.svg";
import Video from "/Video.svg";
import pr from "/cc/profileRing.svg";
import pp from "/cc/ProfilePic.svg";
import ins from "/cc/instagram-fill.svg";
import fb from "/cc/facebook-fill.svg";
import twtr from "/cc/twitter-fill.svg";
import ytb from "/cc/youtube-fill.svg";
import ln from "/cc/Line.svg";
import joce from "/cc/joce.svg";
import craig from "/cc/craig.svg";

const Section5 = () => {
  return (
    <>
      <div
        className=" bg-cover bg-center mt-16 md:mt-20 xl:mt-8 p-1 h-[250px] md:h-[350px] lg:h-[520px] xl:h-[450px] lg:px-40"
        style={{ backgroundImage: `url(${vididspl})`,  height:''}}
      >
        <div className="text text-white mt-8 lg:mt-32 xl:mt-16 text-center">
          <h1 className="text-2xl xl:text-4xl md:mx-48 md:font-bold ">HOW TO USE THE APP PERFECTLY</h1>
          <h1 className="xl:mx-64 md:hidden text-sm mt-6 mx-2 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae.
          </h1>
          <h1 className="xl:mx-68 md:mx-52 font-light hidden md:block text-sm mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </h1>

          <div className="vid flex justify-center">
            <img src={Video} alt="" className=""/>
          </div>


        </div>
      </div>

{/* cardd secton-------------------------------------------------> */}
        <div className="team p-4">
          <div className="text md:mt-64 xl:mt-64 mt-20 text-center">
            <h1 className="xl:text-4xl text-2xl md:font-bold ">OUR RELATIVE TEAM</h1>
            <h1 className="xl:mx-72 mt-6 md:hidden lg:mx-40 text-[#6C6C72]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae.
            </h1>
            <h1 className="xl:mx-72 md:mx-36 hidden md:block mt-6 lg:mx-40 text-[#6C6C72]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </h1>
          </div>

          <div className="grid grid-cols-1 justify-center items-center sm:p-3 md:grid-cols-3 mt-8 xl:mx-16 gap-5 xl:gap-6 ">


            <div className="card rounded-xl xl:h-[520px] p-4  xl:w-[368px] shadow-2xl text-center">
              <div className="img mt-6 flex justify-center">
                <img src={pr} alt="" className="absolute md:hidden " />
                <img src={pr} alt="" className="absolute hidden md:block md:w-[200px] lg:hidden" />
                <img src={pr} alt="" className="absolute hidden lg:block " />
                <img src={pp} alt="" className="relative p-3" />
              </div>
              <div className="title mt-6">
                <h1 className="xl:text-2xl font-bold">CARLA PRESS</h1>
                <h1 className="text-lg mt-1 text-[#6C6C72]">APP DEVELOPER</h1>
              </div>
              <div className="about mt-4 text-[#6C6C72] text-sm mx-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae.
              </div>

              <div className="socials mt-8 flex justify-evenly">
                <img src={fb} alt="" />
                <img src={ln} alt="" />
                <img src={ins} alt="" />
                <img src={ln} alt="" />
                <img src={twtr} alt="" />
                <img src={ln} alt="" />
                <img src={ytb} alt="" />
              </div>
            </div>

              <div className="card rounded-xl xl:h-[520px] p-4 xl:w-[368px] shadow-2xl text-center">
              <div className="img mt-6 flex justify-center">
              <img src={pr} alt="" className="absolute md:hidden " />
                <img src={pr} alt="" className="absolute hidden md:block md:w-[200px] lg:hidden" />
                <img src={pr} alt="" className="absolute hidden lg:block " />   
                 <img src={craig} alt="" className="relative p-3" />
              </div>
              <div className="title mt-6">
                <h1 className="xl:text-2xl font-bold">CRAIG GOUSE</h1>
                <h1 className="xl:text-lg mt-1 text-[#6C6C72]">UI/UX DESIGNER</h1>
              </div>
              <div className="about mt-4 text-[#6C6C72] text-sm mx-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae.
              </div> 
               <div className="socials mt-8 flex justify-evenly">
                <img src={fb} alt="" />
                <img src={ln} alt="" />
                <img src={ins} alt="" />
                <img src={ln} alt="" />
                <img src={twtr} alt="" />
                <img src={ln} alt="" />
                <img src={ytb} alt="" />
              </div> 
             </div> 

            <div className="card rounded-xl xl:h-[520px] p-4 xl:w-[368px] shadow-2xl text-center">
              <div className="img mt-6 flex justify-center">
              <img src={pr} alt="" className="absolute md:hidden " />
                <img src={pr} alt="" className="absolute hidden md:block md:w-[200px] lg:hidden" />
                <img src={pr} alt="" className="absolute hidden lg:block " />
                <img src={joce} alt="" className="relative p-3" />
              </div>
              <div className="title mt-6">
                <h1 className="xl:text-2xl font-bold">JOCELYN SEPTIMUS</h1>
                <h1 className="xl:text-lg mt-1 text-[#6C6C72]">
                  WEBSITE DEVELOPER
                </h1>
              </div>
              <div className="about mt-4 text-[#6C6C72] text-sm mx-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae.
              </div> 

              <div className="socials mt-8 flex justify-evenly">
                <img src={fb} alt="" />
                <img src={ln} alt="" />
                <img src={ins} alt="" />
                <img src={ln} alt="" />
                <img src={twtr} alt="" />
                <img src={ln} alt="" />
                <img src={ytb} alt="" />
              </div> 
             </div>  

          </div>
        </div>

        <br />
        <br />
    </>
  );
};

export default Section5;
