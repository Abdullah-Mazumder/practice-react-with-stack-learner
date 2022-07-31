import PropTypes from "prop-types";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class CreateTodoForm extends React.Component {
  state = {
    values: {
      text: "",
      description: "",
    },
    errors: {},
  };

  handleChange = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = this.validate();

    if (isValid) {
      this.props.createTodo(this.state.values);
      e.target.reset();
      this.setState({
        text: "",
        description: "",
      });
    } else {
      this.setState({errors})
    }
  };

  validate = () => {
    const errors = {};
    const { values: {text, description}} = this.state;

    if (!text) {
      errors.text = "Please Provide Valid Title";
    }

    if (!description) {
      errors.description = "Please Provide valid Description";
    }

    return {errors, isValid: Object.keys(errors).length === 0}
  }

  render() {
    const {errors} = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Enter Task</Label>
            <Input
              className={errors.text ? 'is-invalid' : ""}
              placeholder="do some code"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <div className="invalid-feedback">
              <p>{errors.text ? errors.text : ''}</p>
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Describe Task</Label>
            <Input
              className={errors.description ? 'is-invalid' : ""}
              type="textarea"
              placeholder="write a short description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <div className="invalid-feedback">
              <p>{errors.description ? errors.description : ''}</p>
            </div>
          </FormGroup>
          <Button type="submit">Create Task</Button>
        </Form>
      </div>
    );
  }
}

CreateTodoForm.proptype = {
  createTodo: PropTypes.func.isRequired,
};

export default CreateTodoForm;
