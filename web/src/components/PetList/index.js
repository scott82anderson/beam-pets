import PropTypes from "prop-types";
import Pet from "@/components/Pet";
import PetForm from "@/components/Pet/PetForm";
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

const PetList = ({ pets=[], onUpdate }) => {
  if (pets.length === 0) {
    return <p>No pets</p>;
  }

  const [showingAdd, showAdd] = useState(false);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Species</td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <Pet pet={pet} onUpdate={onUpdate} />
          </tr>
        ))}
      </tbody>
      <button onClick={() => showAdd(!showingAdd)}>Add new pet</button>
      { showingAdd && 
        <PetForm pet={{id: ""}} onUpdate={onUpdate} />
      }
    </table>
  );
};

PetList.propTypes = {
  pets: PropTypes.array,
  onUpdate: PropTypes.func
};

export default PetList;