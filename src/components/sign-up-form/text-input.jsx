import React from "react";

import PropTypes from "prop-types";

const TextInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}></label>
      <input
        className={props.error ? "form-control is-invalid" : "form-control"}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
};

export default TextInput;
