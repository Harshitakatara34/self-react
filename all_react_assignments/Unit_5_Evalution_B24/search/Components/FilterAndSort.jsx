import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterAndSort = () => {
  const [search, setSearch] = useSearchParams();
  const [inputSearch, setInputSearch] = useState("");
  const initialSearch = search.getAll("category");

  const [category, setCategory] = useState([] || initialSearch);

  const initialOrder = search.get("order");
  const [order, setOrder] = useState("" || initialOrder);
  const handleFilter = (e) => {
    let newCategory = [...category];
    const Value = e.target.value;

    if (newCategory.includes(Value)) {
      newCategory = newCategory.filter((el) => el !== Value);
    } else {
      newCategory.push(Value);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      category,
      order,
      inputSearch
    };

    setSearch(params);
  }, [category, order,inputSearch]);

  return (
    <div>
      <div>
      <div>
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </div>
        <div>
          <h3>Filtering</h3>
          <input
            type="checkbox"
            value="men"
            onChange={handleFilter}
            checked={category.includes("men")}
          />
          <label>Men</label>
          <br />
          <input
            type="checkbox"
            value="women"
            onChange={handleFilter}
            checked={category.includes("women")}
          />
          <label>Women</label>
        </div>
        <br />
        <br />
        <div>
          <h3>Sorting</h3>
          <input
            type={"checkbox"}
            value={"asc"}
            onChange={handleSort}
            checked={order === "asc"}
          />
          <br />
          <label>Ascending</label>
          <br />
          <input
            type={"checkbox"}
            value={"desc"}
            onChange={handleSort}
            checked={order === "desc"}
          />
          <br />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSort;
