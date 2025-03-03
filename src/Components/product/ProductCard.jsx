/* eslint-disable */
import style from "./Product.module.css";
import { Rating } from "react-simple-star-rating";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
function ProductCard({ data }) {
  const { image, title, rating, price } = data;
  return (
    <div className={style.productCard}>
      <a href="">
        <img src={image} alt="product image" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={style.rating}>
          <span>
            <Rating size={15} initialValue={rating.rate} />
          </span>
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
      </div>
      <button className={style.button}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
