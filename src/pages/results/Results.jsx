import { useEffect, useState } from "react";
import style from "./Results.module.css";
import Layout from "../../Components/layout/Layout";
import { useParams } from "react-router-dom";
import { productUrl } from "../../api/endPoints";
import axios from "axios";
import ProductCard from "../../Components/product/ProductCard";
axios;
function Results() {
  const { categoryName } = useParams();
  console.log(categoryName);
  const [result, setResult] = useState();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((Response) => {
        setResult(Response.data);
        // console.log(Response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [categoryName]);
  return (
    <Layout>
      <h1>Results</h1>
      <p>Category:{categoryName}</p>
      <hr />
      <div className={style.result_container}>
        {result?.map((product, i) => {
          return <ProductCard data={product} key={i} addToCartBtn={true} />;
        })}
      </div>
    </Layout>
  );
}

export default Results;
