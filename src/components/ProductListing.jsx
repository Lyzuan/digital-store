import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "./ProductCard";

const ProductListing = () => {
    return (
        <div className="w-full flex flex-column align-items-center justify-content-center bg-blue-50 p-4">
            <div className="w-8 flex align-items-center justify-content-between mb-4">
                <h4 className="text-gray-700 text-xl font-semibold">Coleções em destaque</h4>
                <Link 
                    to="/produtos" 
                    className="flex align-items-center gap-1 text-pink-600 no-underline text-base font-medium"
                >
                    Ver todos <FaArrowRightLong />
                </Link>
            </div>

            <div className="w-8 align-items-center flex justify-content-center">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl w-full">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
