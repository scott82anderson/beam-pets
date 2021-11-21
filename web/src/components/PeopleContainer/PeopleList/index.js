import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  person: {
    marginTop: '0.8rem',
    marginBottom: '0.8rem',
  },
});

const PeopleList = ({ people }) => {
  if (people.length === 0) {
    return <p>No people!</p>;
  }

  const classes = useStyles();

  return (
    <ul>
      {people.map((person) => (
        <li key={person.id} className={classes.person}>
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
