import React from "react";

import PropTypes from "prop-types";

import TextInput from "./text-input";

const Form = ({
  values,
  handleChange,
  agreement,
  haandleAgreement,
  handleSubmit,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="name"
        label="Name"
        placeholder="Name"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />
      <TextInput
        name="email"
        type="email"
        label="Email"
        placeholder="Email"
        value={values.email}
        error={errors.email}
        onChange={handleChange}
      />
      <TextInput
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
        value={values.password}
        error={errors.password}
        onChange={handleChange}
      />
      <TextInput
        name="birthDate"
        type="date"
        label="Date"
        placeholder="Date"
        value={values.birthDate}
        error={errors.birthDate}
        onChange={handleChange}
      />
      <br />
      <div className="form-group">
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
          />{" "}
          Other
        </label>
        <br />
        {errors.gender && <div style={{color: '#dc3545'}}>{errors.gender}</div>}
        <br />
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="agreement"
            checked={agreement}
            onChange={haandleAgreement}
          />{" "}
          Agree with our all terms and conditions
        </label>
        <br />
        <br />
      </div>
      <button type="submit" className="btn btn-primary" disabled={!agreement}>
        Create User
      </button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  haandleAgreement: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
