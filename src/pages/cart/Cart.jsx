import { useContext } from "react";
import { Type } from "../../utility/action.type";
import Layout from "../../Components/layout/Layout";
import style from "./cart.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../Components/currencyFormat/CurrencyFormat";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const incremnet = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={style.cart_container_outer}>
        <div className={style.cart_container_inner}>
          <h2>Hello</h2>
          <h3> Your shopping basket </h3>
          <hr />
          {basket?.length == 0 ? (
            <p>whoops no item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section key={i} className={style.cart_products}>
                  <ProductCard
                    data={item}
                    flex={true}
                    hasDescription={true}
                    addToCartBtn={false}
                    hr={true}
                  />

                  <div className={style.amounteUpdateBtn}>
                    <button onClick={() => incremnet(item)}>
                      <IoIosArrowUp />
                    </button>
                    <span>{item.amount}</span>
                    <button onClick={() => decrement(item.id)}>
                      <IoIosArrowDown />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={style.subtotal}>
            <div>
              <p>Subtotal ({basket?.length}) items</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>this order contains a gift</small>
            </span>
            <Link to="/payment">continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
