import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  field: {
    display: "block",
    marginBottom: 16,
    marginTop: 16,
  },
  label: {
    display: "block",
    fontSize: 14,
    fontWeight: 600,
    //
  },
  input: {
    border: "1px solid #A0A0A0",
    borderRadius: 4,
    display: "block",
    padding: 4,
    width: 320,
    //
  },
});

const FormField = ({ label, name, type, value: initialValue, ...props }) => {
  const classes = useStyles();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.field}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        className={classes.input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
};

FormField.defaultProps = {
  type: "text",
};

export default FormField;
