import { useContext } from "react";
import { PageContext } from "../context/pageContext";

const usePages = () => {
  const {
    contactsList,
    setContactsList,
    currentPage,
    setCurrentPage,
    listItemsPerPage,
    setListItemsPerPage,
    currentUsers,
  } = useContext(PageContext);

  return {
    contactsList,
    setContactsList,
    currentPage,
    setCurrentPage,
    listItemsPerPage,
    setListItemsPerPage,
    currentUsers,
  };
};

export default usePages;
