import { useContext } from "react";
import Layout from "../../Components/layout/Layout";
import style from "./cart.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../Components/currencyFormat/CurrencyFormat";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);
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
                <ProductCard
                  key={i}
                  data={item}
                  flex={true}
                  hasDescription={true}
                  addToCartBtn={false}
                />
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
