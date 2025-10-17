import { images } from "../../public/assets/img";
import React from 'react'

function login() {
  return (
    <>
    <div className="container">
      <div
        className="background relative w-screen h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.bg})`,
        }}
      >
        <img src={images._2pf} alt="frame1" className="absolute top-[85%] left-[10%] md:top-[74%] md:left-[5%]  w-[90px] sm:w-[140px] md:w-[160px]" />

        <img src={images._2pfbw} alt="frame2" className="absolute top-[2%] left-[8%] md:top-[0%] md:left-[5%] w-[120px] sm:w-[170px] md:w-[240px]" />

        <img src={images._3pf} alt="frame3" className="absolute top-[10%] left-[45%] md:top-[6%] md:left-[30%] w-[100px] sm:w-[170px] md:w-[200px]" />

        <img src={images._3pfc} alt="frame4" className="absolute top-[18%] left-[10%] md:top-[1%] md:left-[50%] w-[90px] sm:w-[160px] md:w-[180px]" />

        <img src={images.cross} alt="frame5" className="absolute top-[67%] left-[10%] md:top-[30%] md:left-[5%] w-[70px] sm:w-[120px] md:w-[147px]"/>

        <img src={images.lamp} alt="frame6" className="absolute top-[0%] right-[8%] md:top-[0%] md:right-[5%]  w-[80px] sm:w-[140px] md:w-[180px]"/>

        <img src={images.mirror} alt="frame7" className="absolute top-[24%] right-[0%] md:top-[15%] md:right-[19%] w-[110px] sm:w-[160px] md:w-[200px]" />

        <img src={images.writing} alt="frame8" className="absolute top-[76%] right-[12%] md:top-[70%] md:right-[16%] w-[160px] sm:w-[230px] md:w-[280px]"/>



         <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute top-[35%] md:top-[28%] md:left-[22%]  bg-no-repeat bg-contain flex items-center justify-center text-[#f1c27d]
          w-[300px] h-[220px]
          sm:w-[450px] sm:h-[350px]
          md:w-[600px] md:h-[440px]"
          style={{
            backgroundImage: `url(${images.frame})`
          }}
        >
            
          <div className="w-[70%] text-left text-[#f5deb3] font-serif tracking-wide">
            <form action="">
                <p className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3 ">TEAM NAME:</p>
          <input
            type="text" id="name" name="name" class="name"
            className="outline-none"
          />
            <br /><br />
          <p className="text-lg sm:text-xl md:text-2xl mt-1 sm:mt-2 md:mt-3 mb-1 sm:mb-2 md:mb-3 ">LOGIN:</p>
          <input
            type="password" id="login" name="login" class="login"
            className=" outline-none"
          />
            </form>
          
        </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default login