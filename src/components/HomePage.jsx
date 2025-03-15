import axios from "axios";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";




export default function HomePage() {

  const [featuredProducts, setFeaturedProducts] = useState([]);




  const fetchFeaturedProducts = async () => {
    const response = await axios.get('featured.json');

    setFeaturedProducts(response.data);
  }

  useEffect(() => {
    fetchFeaturedProducts();

  }, []);


  const renderFeaturedProducts = () => {
    const jsx = [];

    for (let p of featuredProducts) {
      jsx.push(<div className="col-md-3 mb-4">
        <ProductCard
        key={p.id}
          imageUrl={p.image}
          productName={p.name}
          price={p.price}
        />
      </div>)
    }

    return jsx;


  }



  return (


    <main className="container my-5">
     
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {/* {renderFeaturedProducts()} */}

        {
          featuredProducts.map(p => (
            <div className="col-md-3 mb-4">
              <ProductCard
              key={p.id}
                imageUrl={p.image}
                productName={p.name}
                price={p.price}
              />
            </div>
          ))

        }


      </div>
    </main>

  )
}