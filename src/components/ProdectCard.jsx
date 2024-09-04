import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const ProductCard = () => {
    const [productsMen, setProductMen] = useState([])
    const [productsWomen, setProductWomen] = useState([])
    const [ElectronicProduct,setElectronic] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchProduct = async () => {
  
      try {
        const res = await fetch('https://fakestoreapi.com/products/');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await res.json();

        let MensProduct = json?.filter(data => data.category === "men's clothing");
        let womenProduct = json?.filter(data => data.category === "women's clothing");
        let ElectronicProduct = json?.filter(data => data.category === "electronics");

        setElectronic(ElectronicProduct)
        setProductMen(MensProduct);
        setProductWomen(womenProduct);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);  
      }
    };
    
    useEffect(() => {
      AOS.init();
  
      fetchProduct();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <>
      <h2>Mens Collections: ({productsMen.length} products available)</h2>
      <div className='prodectSection' data-aos="fade-right"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine">
        {
          productsMen.map((product) => (
            <div className="card" >
            <img src={product.image} alt={product.title} className="cardImage" />
            <div className="cardBody">
              <h4 className="cardTitle">{product.title}</h4>
              <p className="cardText">{product.description}</p>
              <p className="cardPrice">${product.price}</p>
              <p className="cardCategory">{product.category}</p>
            </div>
          </div>
          ))
        }
      </div>
      <h2>Women Collections: ({productsWomen.length} products available)</h2>
      <div className='prodectSection' data-aos="fade-right"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine">
        {
          productsWomen.map((product) => (
            <div className="card" >
            <img src={product.image} alt={product.title} className="cardImage" />
            <div className="cardBody">
              <h4 className="cardTitle">{product.title}</h4>
              <p className="cardText">{product.description}</p>
              <p className="cardPrice">${product.price}</p>
              <p className="cardCategory">{product.category}</p>
            </div>
          </div>
          ))
        }
      </div>
      <h2>Electronics: ({ElectronicProduct.length}products available)</h2>
      <div className='prodectSection' data-aos="fade-right"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine">
        {
          ElectronicProduct.map((product) => (
            <div className="card" >
            <img src={product.image} alt={product.title} className="cardImage" />
            <div className="cardBody">
              <h5 className="cardTitle">{product.title}</h5>
              <p className="cardText">{product.description}</p>
              <p className="cardPrice">${product.price}</p>
              <p className="cardCategory">{product.category}</p>
            </div>
          </div>
          ))
        }
      </div>
      </>
    );
  };
  
  export default ProductCard;