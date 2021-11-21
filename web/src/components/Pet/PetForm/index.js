import PropTypes from "prop-types";
import FormField from "@/components/FormField";

const PetForm = ({ pet, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    onSubmit(values);
  };

  return (
    <div>
      <h3>{pet.id === "" ? 'Create' : 'Update'} pet</h3>
      <form onSubmit={handleSubmit} data-testid="pet-form">
        <FormField label="Name" name="name" value={pet.name} required />
        <FormField
          label="Age"
          name="age"
          value={pet.age}
        />
        <FormField
          label="Species"
          name="species"
          value={pet.species}
        />
        <input type="hidden" name="id" value={pet.id} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

PetForm.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    species: PropTypes.string
  }),
  onSubmit: PropTypes.func,
};

export default PetForm;
