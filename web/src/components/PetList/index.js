import PropTypes from "prop-types";
import Pet from "@/components/Pet";

const PetList = ({ pets=[] }) => {
  if (pets.length === 0) {
    return <p>No pets</p>;
  }

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
            <Pet pet={pet} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

PetList.propTypes = {
  pets: PropTypes.array,
};

export default PetList;