import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'


const Category = () => {
    return (
        <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
            <img src= {slide1} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white"> Salad</h3>
            </div> 
        </SwiperSlide>
        <SwiperSlide>
            <div>
            <img src= {slide1} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white"> Salad</h3>
            </div> 
        </SwiperSlide>
        <SwiperSlide><img src= {slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src= {slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
       
      </Swiper>
    );
};

export default Category;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination } from 'swiper/modules';



// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';

// import slide1 from '../../../assets/home/slide1.jpg'
// import slide2 from '../../../assets/home/slide2.jpg'
// import slide3 from '../../../assets/home/slide3.jpg'
// import slide4 from '../../../assets/home/slide4.jpg'
// import slide5 from '../../../assets/home/slide5.jpg'

// const Category = () => {
//        return (

//         <>
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           freeMode={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[FreeMode, Pagination]}
//           className="mySwiper"
//         >
//           <SwiperSlide><img src={slide1}alt="" /></SwiperSlide>
//           <SwiperSlide><img src={slide2}alt="" /></SwiperSlide>
//           <SwiperSlide><img src={slide3}alt="" /></SwiperSlide>
//           <SwiperSlide><img src={slide4}alt="" /></SwiperSlide>
//           <SwiperSlide><img src={slide5}alt="" /></SwiperSlide>
//           <SwiperSlide>Slide 7</SwiperSlide>
//           <SwiperSlide>Slide 8</SwiperSlide>
//           <SwiperSlide>Slide 9</SwiperSlide>
//         </Swiper>
//       </>

//         );
//          };
        
//          export default Category;
