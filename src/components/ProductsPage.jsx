import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";


export default function ProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);


    return (

        <div className="container mt-5">

            <h1>Our Products</h1>
            <div clasName="row">
                {
                    products.map(p => (
                        <div key={p.id} className="col-md-4 mb-4">
                            <ProductCard
                                imageUrl={p.image}
                                productName={p.name}
                                price={p.price}
                            />
                        </div>
                    ))
                }


            </div>
        </div>
    )
}
