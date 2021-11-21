import PropTypes from "prop-types";
import FormField from "@/components/FormField";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  updateHeader: {
    marginTop: '2rem',
    marginBottom: '0.8rem',
    fontSize: '2rem',
  },
});

const DetailsForm = ({ person, onSubmit }) => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    onSubmit(values);
  };

  return (
    <div>
      <h3 className={classes.updateHeader}>Update details</h3>
      <form onSubmit={handleSubmit} data-testid="details-form">
        <FormField label="Name" name="name" value={person.name} required />
        <FormField
          label="Description"
          name="description"
          value={person.description}
        />
        <input className="bg-blue-500 text-white rounded px-5 py-2" type="submit" value="Update" />
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
