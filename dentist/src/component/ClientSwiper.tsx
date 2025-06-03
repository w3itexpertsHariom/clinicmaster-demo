"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { clientswiperdata } from "../constant/alldata";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

interface props{
    columnstand1? : string;
    columnstand2? : string;
}

function ClientSwiper({ columnstand1, columnstand2 } : props) {
    return (
        <>
            <div className="col-xl-4">
                <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                    <h2 className={`title m-b0 ${columnstand1}`}>Our Accepted insurance</h2>
                </div>
            </div>
            <div className="col-xl-8 m-b30">
                <Swiper className="client-swiper2"
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay:3000,
                    }}
                    breakpoints={{
                        767: {
                            slidesPerView: 4,
                        },
                        575: {
                            slidesPerView: 3,
                        },
                        320: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Autoplay]}
                >
                    {clientswiperdata.map((data, i) => (
                        <SwiperSlide className="wow bounceIn" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                            <div className={`clients-logo2 ${columnstand2}`}>
                                <Image src={data.image} alt="ind" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
export default ClientSwiper;