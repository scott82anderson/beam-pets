import PropTypes from "prop-types";
import FormField from "@/components/FormField";
import PetList from "@/components/PetList";

const DetailsForm = ({ person, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    onSubmit(values);
  };

  return (
    <div>
      <h3>Update details</h3>
      <form onSubmit={handleSubmit} data-testid="details-form">
        <FormField label="Name" name="name" value={person.name} required />
        <FormField
          label="Description"
          name="description"
          value={person.description}
        />
        <input type="submit" value="Update" />
      </form>
      <h4>Pets</h4>
      <PetList pets={person.pets} />
    </div>
  );
};

DetailsForm.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    pets: PropTypes.array
  }),
  onSubmit: PropTypes.func,
};

export default DetailsForm;
