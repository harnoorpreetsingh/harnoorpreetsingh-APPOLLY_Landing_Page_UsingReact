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
        className=" bg-cover bg-center mt-16 p-1 h-[350px] lg:h-[520px] lg:px-40"
        style={{ backgroundImage: `url(${vididspl})`,  height:''}}
      >
        <div className="text text-white mt-8 lg:mt-32 text-center">
          <h1 className="text-3xl xl:text-4xl">HOW TO USE THE APP PERFECTLY</h1>
          <h1 className="xl:mx-64 text-sm mt-6">
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
          <div className="text  xl:mt-72 mt-32 text-center">
            <h1 className="xl:text-4xl text-2xl font-bold ">OUR RELATIVE TEAM</h1>
            <h1 className="xl:mx-72 mt-6 lg:mx-40 text-[#6C6C72]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </h1>
          </div>

          <div className="grid grid-cols-1 justify-center items-center sm:p-3 md:grid-cols-3 mt-16 xl:mx-40 gap-5 xl:gap-20 ">


            <div className="card rounded-xl xl:h-[520px] p-4  xl:w-[368px] shadow-2xl text-center">
              <div className="img mt-6 flex justify-center">
                <img src={pr} alt="" className="absolute " />
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
                <img src={pr} alt="" className="absolute " />
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
                <img src={pr} alt="" className="absolute " />
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
