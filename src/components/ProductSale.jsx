import { Button } from 'primereact/button';
import tenis3 from '../assets/tenis3.png'
import ellipse from '../assets/Ellipse.png'

const ProdctSale = () => {
    return (
        <div className='w-full bg-white py-6'>
            <div className='w-full flex flex-colmun gap-3 mt-4 mb-8'>
                <div className='w-full flex flex-column px-8 align-items-center justify-content-center mt-8'>
                    <img src={tenis3} alt="Tenis em oferta" className='tenis3 z-5' />
                    <img src={ellipse} alt="fundo" className='ellipse absolute'/>
                </div>
                <div className='w-full flex flex-column mt-8 gap-4'>
                    <p className="text-pink-600 text-base font-bold" >Oferta especial</p>
                    <h4 className="text-gray-700 text-6xl w-7" >Air Jordan edição de colecionador</h4>
                    <p className="text-base w-6" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <Button className="w-13rem h-3rem" label='Ver Oferta' />
                </div>
            </div>
        </div>
    );
}

export default ProdctSale;