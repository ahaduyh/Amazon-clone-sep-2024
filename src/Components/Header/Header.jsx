import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import style from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);
  // console.log(basket.length);

  return (
    <section className={style.header_fixed}>
      <section className={style.header_container}>
        <div className={style.header_left_container}>
          {/* logo */}
          <Link to="/">
            <img
              className={style.header_amazon_logo}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          {/* delivery */}
          <div className={style.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={style.header_search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />

          <BsSearch size={25} />
        </div>

        <div className={style.header_right}>
          <a className={style.language}>
            <img
              src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
              alt="usa flag"
            />

            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          <Link to="/auth">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </Link>

          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className={style.cart}>
            <BiCart size={35} />
            <span> {basket.length} </span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
