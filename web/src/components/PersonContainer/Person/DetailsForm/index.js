import PropTypes from "prop-types";
import FormField from "@/components/FormField";

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
