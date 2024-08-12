import { Swiper, SwiperSlide } from 'swiper/react'
import Homecard from '../public/homecard.png'
import { register } from 'swiper/element/bundle'
import { Button } from 'primereact/button';
import ornament from '../assets/ornament.png';

register();
import 'swiper/css';
import 'swiper/css/pagination';




const Gallery = () => {

    const data = [
        { id: '1', image: Homecard, index: ornament },
        { id: '2', image: Homecard, index: ornament },
        { id: '3', image: Homecard, index: ornament },
        { id: '4', image: Homecard, index: ornament },
    ]

    return (
        <div className='w-full py-6 bg-gray-100'>
            <div>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={false}
                    className='w-full'
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='flex align-items-center justify-content-center'>
                                <div className='w-8 flex flex-column align-items-start m-0 px-8 gap-1 justify-content-center '>
                                    <h4 className='text-yellow-400 m-1 px-4'>Melhores ofertas personalizadas</h4>
                                    <h1 className='text-7xl w-6 m-1 px-4'>Queima de estoque Nike 🔥</h1>
                                    <p className='w-6 text-left text-xl px-4'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                    <div className='flex w-10 mt-4 px-4'>
                                        <Button className='w-3 h-4rem' label="Ver Ofertas" />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <img
                                        src={item.image}
                                        alt="Slider"
                                        className='w-full tenis1'
                                    />
                                </div>
                                <div className='flex'>
                                    <img
                                        src={item.index}
                                        alt="ornament"
                                        className='absolute top-0 right-0 ' />
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Gallery;