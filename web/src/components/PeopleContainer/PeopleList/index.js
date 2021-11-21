import PropTypes from "prop-types";

const PeopleList = ({ people }) => {
  if (people.length === 0) {
    return <p>No people!</p>;
  }

  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          <h4>
            <a href={`/person/${person.id}`}>{person.name}</a>
          </h4>
          <p>{person.description}</p>
          <p>Pets: {person?.pets?.length}</p>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
