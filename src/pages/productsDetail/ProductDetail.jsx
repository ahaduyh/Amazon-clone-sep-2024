import style from "./ProductDetail..module.css";
import Layout from "../../Components/layout/Layout";
import ProductCard from "../../Components/product/ProductCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../api/endPoints";

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((Response) => {
        setProduct(Response.data);
        console.log(Response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },);
  return (
    <Layout>
      <div className={style.productDetail_container}>
        <ProductCard data={product} />
        <p>{product.description}</p>
      </div>
    </Layout>
  );
}

export default ProductDetail;
