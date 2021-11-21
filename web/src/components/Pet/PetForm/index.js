import PropTypes from "prop-types";
import FormField from "@/components/FormField";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  petsHeader: {
    marginTop: '2rem',
    marginBottom: '0.8rem',
    fontSize: '1.7rem',
  },
  petsForm: {
    marginBottom: '2rem',
  }
});

const PetForm = ({ pet, onSubmit, onCancel }) => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    onSubmit(values);
  };

  return (
    <div className={classes.petsForm}>
      <h3 className={classes.petsHeader}>{pet.id === "" ? 'Create' : 'Update'} pet</h3>
      <form onSubmit={handleSubmit} data-testid="pet-form">
        <FormField label="Name" name="name" value={pet.name} required />
        <FormField
          label="Age"
          name="age"
          type="number"
          value={pet.age}
        />
        <FormField
          label="Species"
          name="species"
          value={pet.species}
        />
        <input type="hidden" name="id" value={pet.id} />
        <input className="my-3 bg-blue-500 text-white rounded px-4 py-1" type="submit" value="Save" />
        <input className="m-3 bg-grey-800 rounded px-4 py-1" type="button" onClick={() => onCancel()} value="Cancel" />
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
  onCancel: PropTypes.func
};

export default PetForm;
