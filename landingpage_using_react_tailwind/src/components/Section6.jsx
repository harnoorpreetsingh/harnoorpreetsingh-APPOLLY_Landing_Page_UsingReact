import bg1 from "/bg1.svg"
import Review from "/Review.svg"
import Slider2 from "/Slider2.svg"
import Image from "/Image.svg"
import Image2 from "/Image (1).svg"
import Image3 from "/Image (2).svg"
import rv from "/rv.svg"


const Section6 = () => {
  return (
    <>
        <div className=" bg-cover bg-center  h-[]  xl:px-40 mt-3 " style={{ backgroundImage: `url(${bg1})` }}>

    
        <div className="text text-white mt-2 md:mt-16 p-[1px] text-center ">
          <h1 className="xl:text-4xl text-2xl md:text-3xl md:mt-28 md:font-bold  lg:mt-20 mt-16 mx-2">OUR HAPPY CUSTOMERS</h1>
          <h1 className="xl:mx-64 mt-6 px-6 md:hidden font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae.
          </h1>
          <h1 className="xl:mx-64 hidden md:block md:mx-32 mt-6 px-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </h1>
        </div>
        <img src={Review} alt="" className="hidden sm:flex"/>
        <img src={rv} alt="" className="sm:hidden mt-[-20px] flex justify-center items-center "/>
        <div className="slider flex justify-center  mt-[-60px] md:mt-[1px] p-4">
        <img src={Slider2} alt="" />
          <br /><br />
        </div>
    </div>

    <div className="blog">
    <div className="text mt-16 text-center">
          <h1 className="xl:text-4xl text-3xl mx-3 md:font-bold">OUR RECENT BLOG</h1>
          <h1 className="xl:mx-80 mt-6 md:hidden mx-8 text-[#6C6C72]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae.
          </h1>
          <h1 className="xl:mx-80 md:mx-32 mt-4 md:mt-6 hidden mx-8 text-[#6C6C72] md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </h1>
        </div>






        <div className="card grid grid-cols-1 justify-center md:grid-cols-3 mt-6 md:mt-12 xl:mx-40 md:mx-10 gap-10 md:justify-between">
            <div className="card flex flex-col items-start  rounded-xl xl:h-[460px] xl:w-[314px] 2xl:w-[390px] 2xl:h-[490px] p-1 shadow-lg">
                  <img src={Image} alt=""  />
                  <div className="text px-4 flex flex-col md:text-center md:items-center md:justify-center w-[100%] ">
                    <div className="overflow-hidden">
                    <h1 className="text-lg mt-2 md:h-[120px] md:w-[180px] lg:w-[100%] lg:h-[80px] flex lg:text center">THE SNAP PIXEL: HOW IT WORKS AND HOW TO INSTALL</h1>

                    </div>
                    <div className=" overflow-hidden">
                    <h1 className=" mt-2 md:h-[120px] md:w-[180px] lg:w-[100%] lg:h-[80px] flex lg:text center  text-sm  text-[#6C6C72]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</h1>
                    </div>
                  </div>
                  <h1 className="mt-4 mb-2 md:mt-8  lg:mt-6 underline px-4 text-xl font-bold text-[#5851EA]">READ MORE</h1>
            </div>
       
    
    
            <div className="card flex flex-col  items-start  xl:h-[460px] rounded-xl xl:w-[314px] 2xl:w-[390px] p-1 2xl:h-[490px] shadow-lg">
                  <img src={Image2} alt=""  />
                  <div className="text px-4 flex flex-col md:text-center md:items-center md:justify-center w-[100%] ">
                    <div className="overflow-hidden">
                    <h1 className="text-lg mt-2 md:h-[120px] md:w-[180px] lg:w-[100%] lg:h-[80px] flex lg:text center">GLOBAL PARTNER SOLUTIONS: A PARTNERSHIP OF INNOVATION</h1>

                    </div>
                    <div className="overflow-hidden">
                    <h1 className=" mt-2 text-sm md:h-[120px] md:w-[180px] lg:w-[100%] lg:h-[80px] flex lg:text center  text-[#6C6C72]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.Est tellus vitae, nullam lobortis enim.</h1>
                    </div>
                  </div>
                  <h1 className="mt-4 mb-2 md:mt-8 lg:mt-6 underline px-4 text-xl font-bold text-[#5851EA]">READ MORE</h1>
            </div>
        
    
    
    
    
            <div className="card flex flex-col items-start  xl:h-[460px] rounded-xl xl:w-[314px] 2xl:w-[390px] p-1 2xl:h-[490px]  shadow-lg">
                  <img src={Image3} alt=""  />
                  <div className="text px-4 flex flex-col md:text-center md:items-center md:justify-center w-[100%] ">
                    <div className="overflow-hidden">
                    <h1 className="text-lg mt-2 md:h-[120px] md:w-[180px] lg:w-[100%] lg:h-[80px] flex lg:text center">2021: AN OPPORTUNITY FOR SNAPCHATTERS TO START FRESH</h1>
                    </div>
                    <div className="overflow-hidden ">
                    <h1 className=" mt-2 text-sm md:h-[120px] md:w-[180px] lg:w-[100%] lg:h-[80px] flex lg:text center  text-[#6C6C72]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</h1>
                    </div>
                  </div>
                  
                  <h1 className="mt-4 mb-2  md:mt-8 lg:mt-6 underline px-4 text-xl  font-bold text-[#5851EA]">READ MORE</h1>
                  
            
        </div>
    
    
    
    
    </div>
    </div>
    </>
  )
}

export default Section6