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

    
        <div className="text text-white mt-16 p-[1px] text-center">
          <h1 className="xl:text-4xl text-3xl lg:mt-20 mt-16 ">OUR HAPPY CUSTOMERS</h1>
          <h1 className="xl:mx-64 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </h1>
        </div>
        <img src={Review} alt="" className="hidden sm:flex"/>
        <img src={rv} alt="" className="sm:hidden flex justify-center items-center "/>
        <div className="slider flex justify-center p-6">
        <img src={Slider2} alt="" />

        </div>
    </div>

    <div className="blog">
    <div className="text mt-16 text-center">
          <h1 className="xl:text-4xl text-3xl font-bold">OUR RECENT BLOG</h1>
          <h1 className="xl:mx-80 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </h1>
        </div>

        <div className="card grid grid-cols-1 justify-center md:grid-cols-3 mt-12 xl:mx-40 p-4 gap-10 md:justify-between">
            <div className="card flex flex-col lg:items-start items-center rounded-xl xl:h-[450px] xl:w-[390px]  p-1 shadow-2xl">
                  <img src={Image} alt=""  />
                  <div className="text px-4">
                    <h1 className="text-lg mt-2 font-bold">THE SNAP PIXEL: HOW IT WORKS AND HOW TO INSTALL</h1>
                    <h1 className=" mt-2 text-sm  text-[#6C6C72]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</h1>
                  </div>
                  <h1 className="mt-6 underline px-4 text-xl font-bold text-[#5851EA]">READ MORE</h1>
            </div>
       
    
    
            <div className="card flex flex-col  lg:items-start items-center xl:h-[450px] rounded-xl xl:w-[390px] p-1 shadow-2xl">
                  <img src={Image2} alt=""  />
                  <div className="text px-4">
                    <h1 className="text-lg mt-2 font-bold">GLOBAL PARTNER SOLUTIONS: A PARTNERSHIP OF INNOVATION</h1>
                    <h1 className=" mt-2 text-sm  text-[#6C6C72]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.</h1>
                  </div>
                  <h1 className="mt-6 underline px-5 text-xl  font-bold text-[#5851EA]">READ MORE</h1>
            </div>
        
    
    
    
    
            <div className="card flex flex-col lg:items-start items-center xl:h-[450px] rounded-xl xl:w-[390px] p-1 shadow-2xl">
                  <img src={Image3} alt=""  />
                  <div className="text px-4">
                    <h1 className="text-lg mt-2 font-bold">2021: AN OPPORTUNITY FOR SNAPCHATTERS TO START FRESH</h1>
                    <h1 className=" mt-2 text-sm  text-[#6C6C72]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</h1>
                  </div>
                  <h1 className="mt-6 underline px-4 text-xl font-bold text-[#5851EA]">READ MORE</h1>
            
        </div>
    
    
    
    
    </div>
    </div>
    </>
  )
}

export default Section6