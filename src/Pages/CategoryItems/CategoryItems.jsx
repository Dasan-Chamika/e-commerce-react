/** @format */

import { useSelector } from "react-redux";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  console.log(category);

  return (
    <div className="w-full overflow-y-auto p-3">
      <h2 className="text-lg font-semibold mb-2">Main Categories</h2>
    </div>
  );
};

export default CategoryItems;
