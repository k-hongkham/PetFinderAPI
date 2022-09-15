import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const SingleAnimal = ({ animal }) => {
  const [animalPhotos, setAnimalPhotos] = useState([]);

  return (
    <>
      <td>{animal.id}</td>

      {animal.photos.length > 0 ? (
        <td>
          <img
            src={animal.primary_photo_cropped.small}
            alt="Girl in a jacket"
            width="100"
            height="87"
          />
        </td>
      ) : (
        <img
          src="https://t3.ftcdn.net/jpg/03/76/74/78/360_F_376747823_L8il80K6c2CM1lnPYJhhJZQNl6ynX1yj.jpg"
          alt="blank"
          width="1"
          height="1"
        />
      )}

      <td>{animal.type}</td>
      <td>{animal.breeds.primary}</td>
      <td>{animal.colors.primary} </td>
      <td>{animal.age}</td>
      <td>{animal.gender}</td>
    </>
  );
};

export default SingleAnimal;
