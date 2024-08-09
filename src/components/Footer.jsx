import LogoFt from '../assets/logo-footer.svg'
import Face from '../assets/facebook.svg'
import Insta from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import '../styles.css';

const Footer = () => {
    return (
        <div className='flex flex-column flex-wrap w-full bg-black-alpha-90 mb-auto w-full h-30rem'>
            <div className='flex w-12 gap-8 py-6 flex-column md:flex-row'>
                <div className='px-8 py-8'>
                    <img
                        src={LogoFt}
                        alt="Logo do site"
                        className='w-14rem h-3rem' />
                    <p className='text-gray-200 text-base w-8 h-4rem md:w-60 lg:w-72'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptatibus illo veritatis corporis voluptates quis necessitatibus! Veniam maxime, voluptates laudantium blanditiis cupiditate doloribus, illum voluptate minus suscipit, esse vitae fugiat?</p>
                    <div className='flex mt-8 gap-4'>
                        <img
                            src={Face}
                            alt="facebook icone" />
                        <img
                            src={Insta}
                            alt="intagram icone" />
                        <img
                            src={Twitter}
                            alt="twitter icone" />
                    </div>
                </div >

                <div className='flex gap-10 pr-8 mt-8 z-5' >
                    <div className='info'>
                        <h6 className='text-lg font-bold pl-8 pr-8 text-gray-200 mb-3 ' >Informação</h6>
                        <ul className='flex flex-column list-none px-8 gap-3' >
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Sobre Drip Store</a></li>
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Segurança</a></li>
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Wishlist</a></li>
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Blog</a></li>
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Trabalhe Conosco</a></li>
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Meus Pedidos</a></li>
                        </ul>
                    </div>
                    <div className='info2 flex w-4 pr-8 flex-column'>
                        <h6 className='text-lg font-bold text-gray-200 pl-8 pr-8 mb-3' >Catergorias</h6>
                        <ul className='flex list-none flex-column px-8 gap-3 text-gray-100' >
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Camisetas</a></li>
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Calças</a></li>
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Bonés</a></li>
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Headphones</a></li>
                            <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 no-underline cursor-pointer '>Tênis</a></li>
                        </ul>
                    </div>
                    <div className='info3 flex flex-column w-14rem'>
                        <h6 className='text-lg font-bold text-gray-200 mb-3' >Contato</h6>
                        <p className='text-gray-200 text-base' >Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>

                        <p className='text-gray-200 text-base mt-4' >(85) 3051-3411</p>
                    </div>
                </div>
                <div className='absolute w-11 h-26rem align-content-end pl-8 flex flex-column align-items-center justify-content-end' >
                <hr className='w-full'/>
                    <p className='text-xs text-gray-300' >© 2024 Digital College</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;