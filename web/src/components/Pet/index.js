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
  const [showingForm, showForm] = useState(false);
  const query = [GET_PET, { id: pet.id }];
  const onDelete = Pets.mutations.useDelete(query);

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
      <tr>
        <td className="px-6 py-4">{pet.name}</td>
        <td className="px-6 py-4">{pet.age}</td>
        <td className="px-6 py-4">{pet.species}</td>
        <td className="px-6 py-4">
          <a className="text-indigo-600 hover:text-indigo-900" href="#" onClick={(event) => showForm(true)} data-testid="edit-button">Edit</a>
        </td>
        <td className="px-6 py-4">
          <a className="text-indigo-600 hover:text-indigo-900" href="#" onClick={(event) => handleRemove(event)} data-testid="remove-button">Remove</a>
        </td>
      </tr>
      }
      {showingForm && 
        <tr>
          <td colSpan="5">
            <PetForm pet={pet} onSubmit={handleSubmit} onCancel={handleCancel} />
          </td>
        </tr>
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
