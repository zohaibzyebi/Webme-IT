// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { works } from "../../data/works";

const Works = () => {
  return (
    <div className="container my-10 md:my-20" id="works">
      <h2 className="title">Case Studies</h2>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {works.map((work) => (
          <SwiperSlide
            key={work.id}
            className="flex justify-center items-center"
          >
            <div className="flex md:flex-row flex-col md:gap-0 gap-8 justify-center items-center px-8 md:px-8">
              <div className="w-full md:w-1/3 mr-5">
                <img src={work.icon} alt="" className="w-40 my-5" />
                <h3 className="text-xl">{work.title}</h3>
                <p>{work.desc}</p>
              </div>
              <div className="w-[80%]  md:w-1/3">
                <img src={work.img} alt="" className="w-full" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Works;
