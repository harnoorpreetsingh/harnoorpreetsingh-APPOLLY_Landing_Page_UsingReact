
import phoneIcon from "/Icons/phone-fill.svg";
import facebookIcon from "/Icons/facebook-fill.svg";
import instagramIcon from "/Icons/instagram-fill.svg";
import mailIcon from "/Icons/mail-fill.svg";
import twitterIcon from "/Icons/twitter-fill.svg";
import youtubeIcon from "/Icons/youtube-fill.svg";
import logo from "/Icons/Logo4 1.svg";
import ham from "/hamburger.svg";

const Header = () => {
  return (
    <>
       <div className="infobar hidden  md:flex justify-between ">


        <div className="flex mt-4 gap-2 sm:gap-4 md:gap-8">
          <div className="left1 flex gap-2">
          <img src={mailIcon} alt="mailIcon" />
          <h1 className='text-white text-sm'>Info@youremail.com</h1>
          </div>
          <div className="left1 flex gap-2">
          <img src={phoneIcon} alt="phoneIcon" />
          <h2 className='text-white text-sm'>(480) 555-0103</h2>
        </div>
        </div>


          <div className="socials mt-4 flex gsp-2 sm:gap-4 md:gap-6  w-[168px]">
          <img src={facebookIcon} alt="facebookIcon" className='' />
          <img src={instagramIcon} alt="instagramIcon" className=''/>
          <img src={twitterIcon} alt="twitterIcon" className=''/>
          <img src={youtubeIcon} alt="youtubeIcon"  className=''  />
        </div> 
      </div>

      
      <div className="navbar flex items-center justify-between bg-white mt-4 p-4 h-9 sm:h-10  md:h-12 lg:h-16 rounded-sm font-semibold   xl:text-lg ">
        <nav className="flex justify-between w-[100%] items-center mt-[] sm:mt-[] lg:mt[0px]">
          <div className="leftlis">
           <div className="lg:hidden sm:w-[28px] md:w-[38px] sm:mt-[] mt-[]"> <img src={ham} alt="" /></div>
            <ul className="lg:flex hidden md:gap-4 lg:gap-10 xl:gap-16 2xl:gap-28 mt-[]">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>FEATURES</li>
            </ul>
          </div>

          <div className="logo rounded-md p-4 lg:p-5 xl:p-7 bg-white h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] flex items-center  ">
            <img src={logo} alt="" className=" w-20 md:w-36  lg:w-48 xl:w-60 " />
          </div>

          <div className="rightlis">
            <ul className="lg:flex  md:gap-4 lg:gap-9 xl:gap-16 2xl:gap-24 lg:!mt-[0px] sm:mt-[] md:mt-[] ">
              <li className="hidden lg:block lg:!mt-[8px]" >SCREENSHOT</li>
              <li className="hidden lg:block lg:!mt-[8px]">BLOG</li>
              <button className="text-white w-[82px] lg:w-[102px] text-xs  sm:mt-[] md:mt-[] lg:mt-[] lg:p-3    bg-[#5956E9] md:p-2 p-[3px]" >DOWNLOAD</button>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
