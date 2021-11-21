import PropTypes from "prop-types";
import DetailsForm from "./DetailsForm";
import PetList from "@/components/PetList";

const Person = ({ person, onUpdate }) => {
  const handleSubmit = (values) => {
    onUpdate({ id: person.id, ...values });
  };

  return (
    <>
      <DetailsForm person={person} onSubmit={handleSubmit} />
      <PetList pets={person.pets} ownerId={person.id} onUpdate={() => onUpdate(person)} />
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
