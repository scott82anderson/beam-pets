import PropTypes from "prop-types";
import Pet from "@/components/Pet";
import { Pets } from "@/lib/entities";
import PetForm from "@/components/Pet/PetForm";
import { useState } from "react";


const PetList = ({ pets=[], ownerId, onUpdate }) => {
  if (pets.length === 0) {
    return <p>No pets</p>;
  }

  const onPetUpdate = Pets.mutations.useUpdate("");
  const onPetCreate = Pets.mutations.useCreate("");

  const onSubmit = (pet) => {
    pet = {
      ...pet,
      age: Number(pet.age),
    }
    if (pet.id === "") {
      const newPet = {
        ...pet,
        owner: ownerId
      };
      onPetCreate(newPet);
    } else {
      onPetUpdate(pet);
    }
    showAdd(false);
    onUpdate();
  }

  const [showingAdd, showAdd] = useState(false);

  return (
    <>
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
              <Pet pet={pet} onPetUpdate={onSubmit} onUpdate={onUpdate} />
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => showAdd(!showingAdd)}>Add new pet</button>
      { showingAdd && 
        <PetForm pet={{id: ""}} onSubmit={onSubmit} onCancel={() => showAdd(false)} />
      }
    </>
  );
};

PetList.propTypes = {
  pets: PropTypes.array,
  ownerId: PropTypes.string,
  onUpdate: PropTypes.func
};

export default PetList;