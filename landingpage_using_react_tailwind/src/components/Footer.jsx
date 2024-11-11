import Email from "/Email Icon.svg";
import Call from "/Call.svg";
import Line  from "/Line 2.svg";
import fb from "/cc/facebook-fill.svg";
import twitterIcon from "/Icons/twitter-fill.svg";
import youtubeIcon from "/Icons/youtube-fill.svg";
import ln from "/cc/Line.svg";
import instagramIcon from "/Icons/instagram-fill.svg";
import lasticon from "/lasticon.svg";
import LL from "/LL.svg";
const Footer = () => {
  return (
    <>
      <div className="white mt-6 lg:mt-20 lg:h-[98px] p-2 flex justify-center ">

        <div className="  bg-white h-[80px]  w-[1240px]  lg:h-[120px] lg:w-[1240px] ">
          <div className="cont flex flex-col md:flex-row gap-6 p-4 lg:p-10 border bg-white relative bottom-0 shadow-2xl items-center justify-evenly rounded-lg">
            <div className="1 flex flex-col md:flex-row items-center gap-4">
              <img src={Email} alt="" />
              <h1 className="text-2xl">info@youremail.com</h1>
            </div>

            <div className="1 lg:flex flex-col md:flex-row items-center ">
              <img src={Line} alt="" className="hidden md:flex"/>
              <img src={LL} alt="" className="md:hidden"/>
            </div>

            <div className="1 flex flex-col md:flex-row items-center gap-4">
              <img src={Call} alt="" />
              <h1 className="text-2xl">+880 321 655 9985</h1>
            </div>
          </div>
        </div>
      </div>

       <div className="bl h-[] xl:h-[630px] mt-28 md:!mt-0 flex flex-col bg-[#232233]">

        <div className="grid grid-cols-1 p-4 md:grid-cols-3 justify-around mt-[220px] md:mt-40 xl:mt-60 xl:gap-16  xl:mx-20 text-white  border-b-2  xl:h-[380px] border-b-white">


            <div className="l  md:pr-0 xl:max-w-[350px]">
                <h1 className="text-4xl font-bold" >LOGO</h1>
                <h1 className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</h1>
                <div className="socials mt-10 flex justify-between">
                <img src={fb} alt="" />
                <img src={ln} alt="" />
                <img src={instagramIcon} alt="" />
                <img src={ln} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={ln} alt="" />
                <img src={youtubeIcon} alt="" />
              </div>
            </div>


            <div className="m xl:max-w-[350px] flex text-start md:justify-center text-white">

            <div className="mt-16 ">
            <h1 className="text-3xl">QUICK LINK</h1>
            <h1 className="mt-4">About</h1>
            <h1 className="mt-4">Features</h1>
            <h1 className="mt-4">Screenshot</h1>
            <h1 className="mt-4">Blog</h1>
            </div>


            </div>


            <div className="r xl:max-w-[350px] mt-12  text-white">
                <h1 className="text-3xl">NEWSLETTER</h1>
                <h1 className="mt-4">Subscribe our newsletter to get our latest
                update & news</h1>
                <div className="inp flex items-center mt-9">
                    <input type="email" className="text-black p-3 w-[600px]   xl:w-[308px]" name="" id="" placeholder="Your email address"/>
                    <button> <img src={lasticon} alt="" className="xl:p-[11px] h-[48px] w-[107px]  xl:w-[51px] md:w-[150px] bg-[#5956E9] border border-white"  /> </button>
                </div>
            </div>


        </div>

        <div className="copy text-white text-center mt-12 lg:mt-8 p-2 ">
            <h1>&copy;  Copyright 2021 .Ojjomedia. All Right Reserved.</h1>
            
        </div>




      </div>  
    </>
  );
};

export default Footer;
