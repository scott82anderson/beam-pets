import PropTypes from "prop-types";
import Pet from "@/components/Pet";
import { Pets } from "@/lib/entities";
import PetForm from "@/components/Pet/PetForm";
import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  petsHeader: {
    marginTop: '2rem',
    marginBottom: '0.8rem',
    fontSize: '1.7rem',
  }
});

const PetList = ({ pets=[], ownerId, onUpdate }) => {
  if (pets.length === 0) {
    return <p>No pets</p>;
  }

  const classes = useStyles();
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
      <h4 className={classes.petsHeader}>Pets</h4>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Species</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {pets.map((pet) => (
              <Pet key={pet.id} pet={pet} onPetUpdate={onSubmit} onUpdate={onUpdate} />
          ))}
        </tbody>
      </table>
      <button className="my-3 bg-blue-500 text-white rounded px-5 py-2" onClick={() => showAdd(!showingAdd)}>Add new pet</button>
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
