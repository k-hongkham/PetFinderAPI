import React, { useEffect, useState, createContext } from "react";

import { fetchPets } from "../../api";
import SingleAnimal from "./SingleAnimal";
import Pagination from "../Pagination/Pagination";

const Animals = () => {
  const [animalsList, setAnimalsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [animalsPerPage, setAnimalsPerPage] = useState(20);
  const indexOfLastAnimal = currentPage * animalsPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
  const currentAnimals = animalsList.slice(
    indexOfFirstAnimal,
    indexOfLastAnimal
  );
  const [token, setToken] = useState();
  useEffect(() => {
    const access = async () => {
      const pets = await fetchPets();
      setAnimalsList(pets.animals);

      console.log("animals", pets);
      setToken(localStorage.getItem("token", token));
      console.log("animaltoken", token);
    };
    access();
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
            {animalsList
              ? animalsList.map((animal) => {
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
      {animalsList.length ? (
        <Pagination
          animalsPerPage={animalsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          token={token}
        />
      ) : null}
    </div>
  );
};

export default Animals;
