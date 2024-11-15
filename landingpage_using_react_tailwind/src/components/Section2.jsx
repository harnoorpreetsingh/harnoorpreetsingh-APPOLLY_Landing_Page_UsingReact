import p2 from "/phone2.svg"
import tick from "/chckb.svg"

const Section2 = () => {
  return (
    <>
    <div className="mt-12 lg:mt-8 p-1">
        <div className="txt text-center xl:px-[220px] 2xl:px-[340px]">
        <h1 className='lg:mt-12 text-3xl lg:text-4xl ' >ABOUT OUR APP</h1>
        <p  className='lg:mt-12 mt-6 lg:text-xl text-[#6C6C72] font-normal mx-8 lg:mx-24'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:mt-16 2xl:px-[120px]">
            <div className="left mt-8 flex justify-center">
            <img src={p2} alt="" className="ml-1" />
            </div>


             <div className="rightcards  mt-8 md:mt-2 ">


                <div className="card1 md:h-[150px] md:w-[368px] sm:h-[190px] xl:h-[220px] rounded-xl xl:w-[572px] 2xl:w-[652px] shadow-lg  p-2 xl:p-4 2xl:p-8 ">

                    <div className="top flex gap-3 lg:mt-1">
                        <img src={tick} alt=""  className="lg:w-[35px] mt-3"/>
                        <p className='lg:text-3xl mt-3 text-xl sm:text-2xl ' >CREATIVE DESIGN</p>
                    </div>
                <div className="bot xl:mt-4 text-[#6C6C72] sm:mt-4 sm:text-xl xl:px-7 px-1">
                    <p className="lg:hidden ml-8 mt-2 " >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                </div>
                </div>

                
                <div className="card1 md:h-[150px] md:w-[368px] sm:h-[190px] xl:h-[220px] rounded-xl mt-8 xl:mt-4 xl:w-[572px] 2xl:w-[652px] shadow-lg p-2 xl:p-8 ">
                    <div className="top flex gap-3 mt-1">
                        <img src={tick} alt=""  className="lg:w-[35px] mt-3"/>
                        <p className='xl:text-3xl  mt-3 text-xl sm:text-2xl' >EASY TO USE</p>
                    </div>
                <div className="bot text-[#6C6C72] xl:mt-4 sm:mt-4 sm:text-xl xl:px-7 px-1">
                <p className="lg:hidden ml-8 mt-2 " >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                </div>
                </div>

                
                <div className="card1 md:h-[150px] md:w-[368px] h-[125px] sm:h-[190px] xl:h-[220px] xl:w-[572px] rounded-xl mt-8 xl:mt-4 2xl:w-[652px]  p-2 xl:p-8 shadow-lg">
                    <div className="top flex gap-3 mt-1">
                        <img src={tick} alt=""  className="lg:w-[35px] mt-3"/>
                        <p className='xl:text-3xl mt-3 text-xl sm:text-2xl' >BEST USER EXPERIENCE</p>
                    </div>
                <div className=" xl:mt-4  text-[#6C6C72] sm:mt-4 sm:text-xl xl:px-7 px-1">
                <p className="lg:hidden ml-8 mt-2 " >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                </div>
                </div>

                </div> 

        </div>
    </div>

<br />
<br />


    </>
  )
}

export default Section2