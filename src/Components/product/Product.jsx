import { useState, useEffect } from "react";
import style from "./Product.module.css";
import ProductCard from "./ProductCard";

import axios from "axios";
function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className={style.product_container}>
      {products?.map((product, i) => {
        return <ProductCard key={i} data={product} addToCartBtn={true} />;
      })}
    </div>
  );
}

export default Product;
