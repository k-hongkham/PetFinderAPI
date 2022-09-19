import React, { useEffect, useState, createContext } from "react";

import { fetchAnimals, fetchToken } from "../../api";
import SingleAnimal from "./SingleAnimal";
import Pagination from "../Pagination/Pagination";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const access = async () => {
      const token = await fetchToken();
      setToken(token.access_token);

      // setAnimalsPerPage(animals.pagination.count_per_page);

      console.log("token", token);
    };
    access();
  }, []);

  useEffect(() => {
    const accessPets = async () => {
      const pets = await fetchAnimals(token);
      setAnimals(pets);
    };
    accessPets();
  }, []);

  return (
    <div className="container mx-auto pb-3 mb-3 mb-md-5 mt-4">
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0"> Animals</h6>

        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">Animal Id</th>
              <th scope="col">Photo</th>
              <th scope="col">Type</th>
              <th scope="col">Breed</th>
              <th scope="col">Colors</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {animals
              ? animals.map((animal) => {
                  return (
                    <tr key={`AnimalList: ${animal.id}`}>
                      <SingleAnimal animal={animal} />
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      {animals.length
        ? animals.map((page) => {
            return (
              <div key={`pageList: ${page.id}`}>
                <Pagination page={page} />;
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Animals;
