import PropTypes from "prop-types";
import { Pets } from "@/lib/entities";
import { useQuery } from "@/lib/graphql";
import { useEffect } from "react";


const GET_PET = /* GraphQL */ `
  query GetPet($id: ID!) {
    pet(id: $id) {
      id
      name
      age
      species
    }
  }
`;

const Pet = ({ pet, onUpdate }) => {
  const query = [GET_PET, { id: pet.id }];
  const onDelete = Pets.mutations.useDelete(query);
  
  const handleSubmit = (values) => {
    onUpdate({ id: pet.id, ...values });
  };

  const handleRemove = (event) => {
    event.preventDefault();
    onDelete({id: pet.id});
    onUpdate();
  }

  return (
    <>
      <td>{pet.name}</td>
      <td>{pet.age}</td>
      <td>{pet.species}</td>
      <td><a href="#">Edit</a></td>
      <td><a href="#" onClick={(event) => handleRemove(event)}>Remove</a></td>
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
