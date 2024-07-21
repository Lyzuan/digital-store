import { Button } from 'primereact/button';
import Gallery from './Gallery';
import Bolinhas from '../assets/bolinhas.png';

const Section = () => {
    return (
        <section className='flex flex-1 px-8 py-8 bg-#F5F5F5 w-full h-screen justify-content-between'>
            <section className='flex px-4 py-2 align-items-center flex-column w-30rem h-20rem'>
                <div className=''>
                    <h4 className='text-yellow-400'>Melhores ofertas personalizadas</h4>
                    <h1 className='text-7xl'>Queima de estoque Nike 🔥</h1>
                    <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                    <Button className='w-14rem h-4rem' label="Ver Ofertas" />
                </div>
            </section>
            <section className=''>
            <Gallery />
            </section>
            <div>
                <img
                    src={Bolinhas}
                    alt="bolinhas amarelas" />
            </div>
        </section>

    );
}

export default Section;