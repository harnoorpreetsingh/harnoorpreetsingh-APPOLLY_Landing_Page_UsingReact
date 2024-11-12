import mobdb from "/mobdb.svg"
import Slider from "/Slider.svg"
import Left  from "/Left Icon.svg"
import Right from "/Right Icon.svg"
import playstore from "/playstore.svg"
import app from "/appstore.svg"
import dwnldic from "/dwnldic.svg"
import star from "/star-fill.svg"
import thumb from "/thumb-up-fill.svg"
import phnnn from "/phnnn.svg"
import AS from "/AS.svg"

const Section4 = () => {
  return (
    <>
    <div className= "mt-12 md:mt-16">
        <div className="txt text-center xl:px-[340px]">
        <h1 className='md:mt-12 md:text-4xl text-2xl mx-40' >CHECKOUT OUR APP INTERFACE LOOK</h1>
        <p  className='md:mt-12 mt-8 md:hidden text-[#6C6C72] mx-12 md:text-xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.</p>
        <p  className='md:mt-10 hidden md:block mt-8 text-[#6C6C72] mx-32 md:text-xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
        </div>
        

        <div className="hidden IMG mt-10 md:flex justify-center ">
            <img src={Left} alt="" className="hidden lg:flex " />
            <img src={mobdb} alt="" className="w-[802px]" />
            <img src={Right} alt="" className="hidden lg:flex"/>
        </div>
        <div className="md:hidden IMG mt-10 flex justify-center">
            <img src={AS} alt="" />
        </div>

         <div className="slide mt-10 mx-20 flex justify-center">
            <img src={Slider} alt="" />

        </div> 



         <div className="grid grid-cols-1 md:mx-6 md:grid-cols-2 mt-12 md:mt-16 lg:mt-20 gap-4 xl:mx-40">

          <div className="left">

            <div className="top  ">
              <h1 className="text-3xl mx-4 lg:text-4xl md:text-start font-semibold sm:text-center " >DOWNLOAD APP NOW</h1>
              <p className="mt-4 mx-4 lg:hidden lg:mx-0 text-[#6C6C72]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
              <p className="mt-4 mx-4 md:mx-12 hidden lg:block lg:mx-0 text-[#6C6C72]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>

              <div className="imgs mx-2 flex items-center  md:justify-start md:gap-4  gap-2 sm:gap-4 mt-10">
            <img src={playstore} alt="" />
            <img src={app} alt="" />

              </div>
        
            </div>

             <div className="bottomcards gap-5 p-1 text-white justify-between flex mt-8 lg:mt-16">

              <div className="card1 h-[128px] p-2 w-[103px] sm:w-[137px] lg:h-[197px] rounded-lg lg:w-[200px] flex flex-col text-center justify-center items-center border border-[#5851EA] bg-[#5851EA]">
                <img src={dwnldic} alt=""  />
                <h1 className="mt-4 lg:text-xl">59865</h1>
                <h1 className="mt-4 text-sm lg:text-xl">DOWNLOAD</h1>
              </div>
              <div className="card1 h-[128px] p-2 w-[103px] sm:w-[137px] flex flex-col text-center justify-center items-center lg:h-[197px] rounded-lg lg:w-[200px] border border-[#5851EA] bg-[#5851EA]">
              <img src={thumb} alt=""  />
              <h1 className="mt-4 lg:text-xl">29852 </h1>
              <h1 className="mt-4 text-sm lg:text-xl">LIKE</h1>
              </div>
                
              <div className="card1 h-[128px] p-2 w-[103px] sm:w-[137px] flex flex-col text-center justify-center items-center lg:h-[197px] rounded-lg lg:w-[200px] border border-[#5851EA] bg-[#5851EA]">
              <img src={star} alt=""  />
              <h1 className="mt-4 lg:text-xl">1500</h1>
              <h1 className="mt-4 text-xs lg:text-xl">5 STAR RATING</h1>
              </div>

            </div> 

            <br /><br />
          </div>


          <div className="Right flex justify-center mx-4">
            <img src={phnnn} alt="" />
          </div>

        </div> 


    </div>  {/* main fragment closing div */}
 
    </>
  )
}

export default Section4