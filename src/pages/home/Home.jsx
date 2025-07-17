import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setFiltered(res);
        return res;
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const filteredData = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filteredData);
  }, [searchTerm, products]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My shop</h1>

        <input
          className="searchBox"
          type="text"
          placeholder="search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {isLoading && <h2>please wait...</h2>}

        <ul className="list">
          {filtered.map((item) => (
            <Link to={`/product/${item.id}`}>
              <div className="cart" key={item.id}>
                <img alt={item.title} src={item.image} className="cartImage" />
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Home;
