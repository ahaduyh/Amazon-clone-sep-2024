// import React from "react";
import style from "./Category.module.css";
import CategoryCard from "./CategoryCard";
import { categoryInfo } from "./categoryInfo";
function Category() {
  return (
    <div className={style.category_container}>
      {categoryInfo.map((items, i) => {
        return <CategoryCard key={i} data={items} />;
      })}
    </div>
  );
}

export default Category;
