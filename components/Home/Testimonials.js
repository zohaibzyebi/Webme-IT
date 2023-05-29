// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay,Pagination } from "swiper";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <div className="container my-20" id="testimonials">
      <h2 className="title">Customer Success</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 40,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="p-5">
            <div className="shadow-md rounded-xl p-10 h-[400px] flex flex-col justify-between mb-[4rem]">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <p>{testimonial.desc}</p>
              <hr className="w-10/12 my-5 border-indigo-600" />
              <div className="flex items-center">
                <img
                  src={testimonial.img}
                  alt=""
                  className="w-16 h-16 rounded-full mr-5"
                />
                <div>
                  <h3 className="font-bold text-indigo-600">
                    {testimonial.name}
                  </h3>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
