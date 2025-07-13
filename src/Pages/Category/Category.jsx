/** @format */

import { Link } from "react-router-dom";
import { Categories } from "./Categories";

const Category = () => {
  return (
    <div className="w-full overflow-y-auto p-3">
      <h2 className="text-lg font-semibold mb-2">Main Categories</h2>
      <div className="w-full grid grid-cols-2 mt-2 grid-rows-[auto] gap-4">
        {Categories.map((category) => (
          <Link to={category.categoryTitle.toLowerCase()} key={category.id}>
            <CategoryUnitItem {...category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;

const CategoryUnitItem = ({ categoryTitle }) => (
  <div className="px-6 py-4 shadow-product-dropshadow rounded-md flex justify-center items-center">
    <h3 className="text-md font-medium text-stone-900">{categoryTitle}</h3>
  </div>
);
