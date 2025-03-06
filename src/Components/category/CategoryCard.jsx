import style from "./Category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  console.log(data);
  const { category, image } = data;
  return (
    <div className={style.categoryCard_container}>
      <Link to={`/category/${category}`}>
        <span>
          <h2>{category}</h2>
        </span>
        <img src={image} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}
export default CategoryCard;
