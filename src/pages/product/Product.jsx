import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductInfo(data))
      .finally(() => setIsLoading(false));

    return () => {};
  }, []);
  console.log({ productInfo });
  return (
    <div className="container">
      <img className="image" src={productInfo.image} />
      <div>
        <h1>{productInfo.title}</h1>
        <h2>{productInfo.category}</h2>
        <div className="btn-container">
  <button className="btn-cart">buy</button>
</div>
      </div>
    </div>
  );
}

export default Product;
