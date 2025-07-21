import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductInfo(data))
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    navigate("/product");
  };

  if (isLoading) return <h2 className="loading">is Loading...</h2>;
  if (!productInfo) return <h2 className="loading">product not found</h2>;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <div className="detail-content">
          <h1>{productInfo.title}</h1>
          <h3 className="detail-category">{productInfo.category}</h3>
          <p className="detail-description">{productInfo.description}</p>
          <p className="detail-price">{productInfo.price} </p>

          <div className="btn-container">
            <button className="btn-cart" onClick={handleAddToCart}>
              Add to buy list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
