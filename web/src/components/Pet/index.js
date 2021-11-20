import PropTypes from "prop-types";
import { useEffect } from "react";
//import PetForm from "./PetForm";

const Pet = ({ pet, onUpdate }) => {
  const handleSubmit = (values) => {
    onUpdate({ id: pet.id, ...values });
  };

  const handleRemove = (id) => {
    console.log("Remove ", id);
  }

  return (
    <>
      <td>{pet.name}</td>
      <td>{pet.age}</td>
      <td>{pet.species}</td>
      <td><a href="#">Edit</a></td>
      <td><a href="#" onClick={() => handleRemove(pet.id)}>Remove</a></td>
    </>
  );
};

Pet.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    species: PropTypes.string
  }),
  onUpdate: PropTypes.func,
};

export default Pet;
