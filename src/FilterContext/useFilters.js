import React, { useContext } from "react";
import FilterContext from "./FilterContext";

function useFilters(products) {
  const { selectedCategory, selectedGender, selectedPrice, selectedColor, query } = useContext(FilterContext);

  let filteredProducts = products;

  // Filtering by Query (Product Title Search)
  if (query) {
    filteredProducts = filteredProducts.filter(
      (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  // Filtering by Gender (if applicable)
  if (selectedGender && selectedGender !== "") {
    filteredProducts = filteredProducts.filter((product) => product.gender === selectedGender);
  }

  // Filtering by Color (if applicable)
  if (selectedColor && selectedColor !== "") {
    filteredProducts = filteredProducts.filter((product) => product.color === selectedColor);
  }

  // Filtering by Category (including company, etc.)
  if (selectedCategory && selectedCategory !== "") {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selectedCategory ||
        color === selectedCategory ||
        company === selectedCategory ||
        newPrice === selectedCategory || // Assuming category can also represent price range
        title === selectedCategory
    );
  }

  // Filtering by Price Range (if selectedPrice represents a range)
  if (selectedPrice && selectedPrice !== "") {
    const [minPrice, maxPrice] = selectedPrice.split("-"); // Assuming price range format is "min-max"
    filteredProducts = filteredProducts.filter(
      (product) => product.newPrice >= minPrice && product.newPrice <= maxPrice
    );
  }

  return filteredProducts;
}

export default useFilters;
