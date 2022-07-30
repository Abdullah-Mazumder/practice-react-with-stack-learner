import PropTypes from "prop-types";
import React from "react";

import Form from "./form";

const initValues = {
  name: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "",
};

export default class SignupForm extends React.Component {
  state = {
    values: initValues,
    agreement: false,
    errors: {},
  };

  handleChange = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleAgreement = (e) => {
    this.setState({
      agreement: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = this.validate();

    if (isValid) {
      this.props.createUser(this.state.values);
      e.target.reset();
      this.setState({ values: initValues, agreement: false, errors: {} });
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};
    const {
      values: { name, email, password, gender, birthDate },
    } = this.state;

    if (!name) {
      errors.name = "Please Provide Your Name";
      if (name.length < 5 || name.length > 30) {
        errors.name = "Name Must Be Between 5-30 Characters";
      }
    }

    if (!email) {
      errors.email = "Please Provide Your Email";
    }

    if (!password) {
      errors.password = "Please Provide Your Password";
    }

    if (!birthDate) {
      errors.birthDate = "Please Provide Your Date of Birth";
    }

    if (!gender) {
      errors.gender = "Please Select Your Gender";
    }

    return { errors, isValid: Object.keys(errors).length === 0 };
  };

  render() {
    return (
      <div className="container card card-body mt-5 p-5">
        <h3 className="text-center">Signup Form</h3>
        <Form
          values={this.state.values}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          haandleAgreement={this.handleAgreement}
          agreement={this.state.agreement}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

SignupForm.propTypes = {
  createUser: PropTypes.func.isRequired,
};
