import React from "react";
import CategoryItem, { CategoryItemProps } from "./CategoryItem";

const DashboardCategories = () => {
  const categories: CategoryItemProps[] = [
    { heading: "Laptops", value: 70 },
    { heading: "Phones", value: 30  },
    { heading:"Shoes", value: 50  },
    { heading:"Clothes", value: 20 },

  ];
  return (
    <div className="dashboardCategories">
      <h2>Inventory</h2>
      <div>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            color={`hsl(${category.value * 4},${category.value}%,50%)`}
            {...category}
          />))}
      </div>
    </div>
  );
};

export default DashboardCategories;
