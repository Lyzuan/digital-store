import tenisItem from '../assets/tenisd2.png'
const ProductCard = () => {

    const dataItem = [
        {
            id: 1,
            titulo: 'K-Swiss V8 - Masculino',
            categoria: 'Tênis',
            preco: 100,
            img: tenisItem,
            desconto: 30,
            precoAnterior: 200
        },

        {
            id: 2,
            titulo: 'K-Swiss V8 - Masculino',
            categoria: 'Tênis',
            preco: 100,
            img: tenisItem,
            precoAnterior: 200
        },
        {
            id: 3,
            titulo: 'K-Swiss V8 - Masculino',
            categoria: 'Tênis',
            preco: 100,
            img: tenisItem,
            precoAnterior: 200
        },
        {
            id: 4,
            titulo: 'K-Swiss V8 - Masculino',
            categoria: 'Tênis',
            preco: 100,
            img: tenisItem,
            desconto: 40,
            precoAnterior: 500
        },
        {
            id: 5,
            titulo: 'K-Swiss V8 - Masculino',
            categoria: 'Tênis',
            preco: 100,
            img: tenisItem,
            precoAnterior: 200
        },
        {
            id: 6,
            titulo: 'K-Swiss V8 - Masculino',
            categoria: 'Tênis',
            preco: 100,
            img: tenisItem,
            desconto: 20,
            precoAnterior: 260
        },
        {
            id: 7,
            titulo: 'K-Swiss V8 - Masculino',
            categoria: 'Tênis',
            preco: 100,
            img: tenisItem,
            precoAnterior: 200
        },
        {
            id: 8,
            titulo: 'K-Swiss V8 - Masculino',
            categoria: 'Tênis',
            preco: 100,
            img: tenisItem,
            precoAnterior: 200
        }
    ]
    return (
        <div className="custom-card-container">
            {dataItem.map((item) => (
                <div key={item.id} className="custom-card">
                    <div className="custom-image-container">
                        {item.desconto && (
                            <div className="discount-tag3">
                                {item.desconto}% OFF
                            </div>
                        )}
                        <img src={item.img} alt={item.titulo} className="custom-card-image" />
                    </div>
                    <div className="custom-card-content">
                        <h3 className="custom-card-title">{item.titulo}</h3>
                        <p className="custom-card-category">{item.categoria}</p>
                        <p className="custom-card-price">
                            R$ {item.preco}{' '}
                            {item.precoAnterior && (
                                <span className="custom-price-old">R$ {item.precoAnterior}</span>
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ProductCard;