import PropTypes from "prop-types";
import DetailsForm from "./DetailsForm";

const Person = ({ person, onUpdate }) => {
  const handleSubmit = (values) => {
    onUpdate({ id: person.id, ...values });
  };

  console.log(person);

  return (
    <>
      <DetailsForm person={person} onSubmit={handleSubmit} />
      <p>
        <a href="/">Back to people...</a>
      </p>
    </>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    pets: PropTypes.array
  }),
  onUpdate: PropTypes.func,
};

export default Person;
