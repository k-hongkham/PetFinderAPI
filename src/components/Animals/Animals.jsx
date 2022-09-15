import React, { useEffect, useState } from "react";
import { animalsData } from "../../api/animalsData";
import SingleAnimal from "./SingleAnimal";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [animalPhotos, setAnimalPhotos] = useState([]);

  useEffect(() => {
    console.log("animalsData:", animalsData);
    const pictures = [];
    const numberOfPhotos = animalsData.photos;
    if (numberOfPhotos !== 0) {
      pictures.push(animalsData);
    }
    console.log("animalsPhotos:", animalsData.photos);
    setAnimals(animalsData);
  });
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
            {animalsData.length
              ? animalsData.map((animal) => {
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
    </div>
  );
};

export default Animals;
