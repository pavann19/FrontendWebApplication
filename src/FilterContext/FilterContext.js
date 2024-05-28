import React, { createContext, useState } from "react";

const FilterContext = createContext({
  selectedCategory: null,
  selectedGender: "",
  query: "",
  setSelectedCategory: () => {},
  setSelectedGender: () => {},
  setQuery: () => {},
});

export const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [query, setQuery] = useState("");

  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        selectedGender,
        query,
        setSelectedCategory,
        setSelectedGender,
        setQuery,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
