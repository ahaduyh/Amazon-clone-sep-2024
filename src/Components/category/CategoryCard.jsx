/* eslint-disable */

import style from "./Category.module.css";

function CategoryCard({ data }) {
  console.log(data);
  const { category, img } = data;
  return (
    <div className={style.categoryCard_container}>
      <a>
        <span>
          <h2>{category}</h2>
        </span>
        <img src={img} />
        <p>Shop now</p>
      </a>
    </div>
  );
}
export default CategoryCard;
