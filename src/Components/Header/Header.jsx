import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import style from "./Header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section className={style.header_container}>
        <div className={style.header_left_container}>
          {/* logo */}
          <a href="/">
            <img
              className={style.header_amazon_logo}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
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

          <a href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>

          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>

          <a href="" className={style.cart}>
            <BiCart size={35} />
            <span> 0 </span>
          </a>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
