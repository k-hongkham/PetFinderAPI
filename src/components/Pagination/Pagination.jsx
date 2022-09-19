import React, { useState, useEffect } from "react";
import { fetchPages } from "../../api";

const Pagination = ({ page }) => {
  const [animalsPerPage, setAnimalsPerPage] = useState([]);
  useEffect(() => {
    const access = async () => {
      const pages = await fetchpages();

      setPagination(animals.pagination);
      // setAnimalsPerPage(animals.pagination.count_per_page);

      console.log("animals", pages);
      console.log("pagination", pagination);
    };
    access();
  }, []);
  return <div></div>;
};

export default Pagination;
