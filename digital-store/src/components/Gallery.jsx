import { Swiper, SwiperSlide } from 'swiper/react'
import Homecard from '../public/homecard.png'
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/pagination';

const Gallery = () => {

    const data = [
        { id: '1', image: Homecard },
        { id: '2', image: Homecard },
        { id: '3', image: Homecard },
        { id: '4', image: Homecard },
    ]

    return (
        <div className='w-30rem h-30rem'>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Slider"
                            className='w-30rem h-30rem'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Gallery;