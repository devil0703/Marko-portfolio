import React from 'react'
import "./Testimonials.css"
import AVTR1 from'../../assets/avatar1.jpg'
import AVTR2 from'../../assets/avatar2.jpg'
import AVTR3 from'../../assets/avatar3.jpg'
import AVTR4 from'../../assets/avatar4.jpg'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import"swiper/css";

import 'swiper/css/pagination'


const data1 = [
  {
   avatar: AVTR1,
   name_1: 'Tina Snow',
   review:  "It has been a fantastic experience working with Marko. He understood the requirements for the job at hand and quickly developed the code I needed for a specific business function with ease. He extremely proficient with python and I look forward to working with him again when the need arises"
  },
  {
    avatar: AVTR2,
    name_1: 'William Snow',
    review:  "A great guy to work with. Understand the problem instantly and provides good solutions! "
   },
   {
    avatar: AVTR3,
    name_1: 'Jack Snow',
    review:  "Their meticulous attention to detail and innovative approach resulted in a product that has truly given us a competitive edge."
   },
   {
    avatar: AVTR4,
    name_1: 'Linda Snow',
    review:  "Vladislav performed the first stage of the work perfectly, quickly understood the essence of the task, was always in touch, but unfortunately it is not possible to proceed to the next stage for reasons beyond our control "
   }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className=" container testimonials__container"
      modules={[ Pagination]} spaceBetween={40} slidesPerView={1}
        pagination={{ clickable: true }}>
        {
        data1.map(({avatar, name_1, review}, index) => {
          return(
            <SwiperSlide key= {index}className="testimonial">
            <div className="client__avatar">
            <img src={avatar} alt= "Avatar__One" />
            </div>
            <h5 className='client__name'>{name_1}</h5>
            <small className='client__review'>
              {review}
            </small>
              </SwiperSlide>

          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials
