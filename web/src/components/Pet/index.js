import PropTypes from "prop-types";
import PetForm from "@/components/Pet/PetForm";
import { Pets } from "@/lib/entities";
import { useState } from "react";


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

const Pet = ({ pet, onPetUpdate, onUpdate }) => {
  const query = [GET_PET, { id: pet.id }];
  const onDelete = Pets.mutations.useDelete(query);
  const [showingForm, showForm] = useState(false);

  const handleRemove = (event) => {
    event.preventDefault();
    onDelete({id: pet.id});
    onUpdate();
  };

  const handleSubmit = (pet) => {
    showForm(false);
    onPetUpdate(pet);
  };

  const handleCancel = () => {
    showForm(false);
  };

  return (
    <>
      {!showingForm && 
      <>
        <td>{pet.name}</td>
        <td>{pet.age}</td>
        <td>{pet.species}</td>
        <td><a href="#" onClick={(event) => showForm(true)}>Edit</a></td>
        <td><a href="#" onClick={(event) => handleRemove(event)}>Remove</a></td>
      </>
      }
      {showingForm && 
        <td colspan="5">
          <PetForm pet={pet} onSubmit={handleSubmit} onCancel={handleCancel} />
        </td>
      }
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
  onPetUpdate: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default Pet;
