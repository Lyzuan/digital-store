import '../styles.css';
import Collection1 from '../public/collection-1.png';
import Collection2 from '../public/collection-2.png';
import Collection3 from '../public/collection-3.png';
import { Button } from 'primereact/button';
import ProductDestaque from './ProductDestaque';

const ProductDetails = () => {
    return (
        <div className="bg-blue-50 flex flex-column justify-content-start align-items-center w-full h-screen">
            <div className="p-d-flex p-flex-column justify-content-center align-items-center p-mb-4 mt-8">
                <h4 className="mb-4 text-2xl text-gray-600">Coleção em destaque</h4>
                <div className="flex flex-row align-items-center gap-3">
                    <div className="image-container">
                        <img
                            src={Collection1}
                            alt="Imagem da coleção 1"
                        />
                        <div className="discount-tag1">30% OFF</div>
                        <Button label="Comprar" className="buy-button1" />
                    </div>
                    <div className="image-container">
                        <img
                            src={Collection2}
                            alt="Imagem da coleção 2"
                        />
                        <div className="discount-tag2">30% OFF</div>
                        <Button label="Comprar" className="buy-button2" />
                    </div>
                    <div className="image-container">
                        <img
                            src={Collection3}
                            alt="Imagem da coleção 3"
                        />
                        <div className="discount-tag3">30% OFF</div>
                        <Button label="Comprar" className="buy-button3" />
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <h4 className="mb-4 mt-8 text-2xl text-gray-600">Coleção em destaque</h4>
            </div>
            <div>
                <ProductDestaque />
            </div>
        </div>
    );
}

export default ProductDetails;