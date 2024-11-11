import Header from "./Header"
import bg1 from "/bg1.svg"
import tx1 from "/Text1.svg"
import Mobile from "/mbupsc.png"

const Section1 = () => {


  return (

    
    <>
     <div className=" bg-cover bg-center p-t-[10px] md:p-t-[0] lg:h-[790px]  xl:h-[1000px] md:h-[800px] lg:px-16 xl:px-40 p-2" style={{ backgroundImage: `url(${bg1})`, paddingTop: '20px'}}> 
        <Header />

         <div className=" mt-8 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-[40px] xl:gap-[120px] lg:gap-[30px] xl:p-4  md:justify-between ">
            <div className="left mt-[35px] md:mt-[110px]">
            <img src={tx1} alt="tx1" className="" />
            </div>
            <div className="right flex justify-center md:justify-end md:items-end">
            <img src={Mobile} alt="Mobile" className="h-[] md:w-[243px] md:h-[341px] lg:w-[413px] lg:h-[453px] xl:h-[703px]" />
            </div>
        </div>


        </div>
        </>
  )
}

export default Section1