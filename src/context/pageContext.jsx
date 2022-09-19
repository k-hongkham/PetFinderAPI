import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../axios";

import useAuth from "../hooks/userAuth";

export const PageContext = React.createContext();

const PageProvider = ({ children }) => {
  const { token } = useAuth();
  const [contactsList, setContactsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listItemsPerPage, setListItemsPerPage] = useState(15);
  const indexOfLastUser = currentPage * listItemsPerPage;
  const indexOfFirstUser = indexOfLastUser - listItemsPerPage;
  const currentUsers = contactsList.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    const getContacts = async () => {
      const contacts = await getAllUsers(token);
      setContactsList(contacts);
    };
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <PageContext.Provider
      value={{
        contactsList,
        setContactsList,
        currentPage,
        setCurrentPage,
        listItemsPerPage,
        setListItemsPerPage,
        currentUsers,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
