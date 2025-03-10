/* eslint-disable */
import style from "./Product.module.css";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../utility/action.type";

function ProductCard({ data, flex, hasDescription, addToCartBtn }) {
  const { image, title, rating, price, id, description } = data;

  const [state, dispatch] = useContext(DataContext);
  // console.log(state);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, rating, price, id, description },
    });
  };

  return (
    <div className={`${style.productCard} ${flex ? style.productFlex : ""}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="product image" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div>{hasDescription && <p>{description}</p>}</div>
        <div className={style.rating_container}>
          <span> {rating?.rate}</span>
          <span>
            <Rating size={15} initialValue={rating?.rate} />
          </span>
          <small>{rating?.count} </small>
          <small> ratings</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
      </div>
      {addToCartBtn && (
        <button className={style.button} onClick={addToCart}>
          Add to cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
