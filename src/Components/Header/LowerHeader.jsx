import { AiOutlineMenu } from "react-icons/ai";
import style from "./LowerHeader.module.css";
function LowerHeader() {
  return (
    <div className={style.lower_header_container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today&apos;s Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
