import React from "react";
import React, { useState, useEffect } from "react";

export const PetContext = React.createContext();

const petContext = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {}, []);
  return <div></div>;
};

export default petContext;
