import SectionTitel from "../../Components/SectionTitel/SectionTitel";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



const Testimunial = () => {
    const [rivews, setrivews] = useState([]);
    useEffect(() => {
        fetch('revies.json')
            .then(res => res.json())
            .then(data => {
                setrivews(data)

            })
    }, [])
    // console.log(rivews)
    return (
        <section>
            <SectionTitel subHeading="what our clint say" heading="TESTIMONIALS"></SectionTitel>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        rivews.map(review => 
                            <SwiperSlide key={review._id}>
                                <div className="flex flex-col items-center mx-24 my-16">
                                <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                                <p className="py-8">{review.details}</p>
                                <h1 className="text-2xl text-center">{review.name}</h1>
                                </div>
                            </SwiperSlide>
                            
                        )
                    }

                </Swiper>

            </div>
        </section>
    );
};

export default Testimunial;