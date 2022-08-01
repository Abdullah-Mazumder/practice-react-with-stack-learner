import React from "react";
import shortid from "shortid";

import MyForm from "./form";

const defaultOptions = [
  { id: shortid.generate(), value: "", vote: 0 },
  { id: shortid.generate(), value: "", vote: 0 },
];

class PollForm extends React.Component {
  state = {
    title: "",
    description: "",
    options: defaultOptions,
    errors: {}
  };

  componentDidMount() {
    const {poll} = this.props;
    if (poll && Object.keys(poll).length > 0) {
      this.setState({
        title: poll.title,
        description: poll.description,
        options: poll.options
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOptionChange = (e, index) => {
    const { options } = this.state;
    options[index].value = e.target.value;
    this.setState({ options });
  };

  createOption = () => {
    const { options } = this.state;
    if (options.length < 5) {
      options.push({
        id: shortid.generate(),
        value: "",
        vote: 0,
      });
      this.setState({options})
    } else {
      alert("You can create max 5 options");
    }
  };

  deleteOption = (index) => {
    const { options } = this.state;
    if (options.length > 2) {
      options.splice(index, 1);
      this.setState({ options });
    } else {
      alert("You must have at least 2 options");
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = this.validate();

    if (isValid) {
      const { title, description, options } = this.state;
      const poll = {
        title,
        description,
        options,
      }

      if (this.props.isUpdate) {
        poll.id = this.props.poll.id;
        this.props.submit(poll);
        alert('Updated Successfully')
      } else {
        e.target.reset();
        this.props.submit(poll);
        this.setState({
          title: "",
          description: "",
          options: defaultOptions,
          errors: {},
        });
      }
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};
    const { title, description, options } = this.state;

    if (!title) {
      errors.title = "Please Provide A Title";
    } else if (title.length < 20) {
      errors.title = "Title Too Short";
    } else if (title.length > 80) {
      errors.title = "Title Too Long";
    }

    if (!description) {
      errors.description = "Please Provide A Description";
    } else if (description.length > 500) {
      errors.title = "Description Too Long";
    }

    const optionErrors = [];
    options.forEach((opt, index) => {
      if (!opt.value) {
        optionErrors[index] = "Option Text Empty";
      } else if (opt.value.length > 100) {
        optionErrors[index] = "Option Text Too Long";
      }
    });

    if (optionErrors.length > 0) {
      errors.options = optionErrors;
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    return (
        <div>
            <MyForm 
                title={this.state.title}
                description={this.state.description}
                options={this.state.options}
                errors={this.state.errors}
                buttonValue={this.props.buttonValue || 'Create Poll'}
                handleChange={this.handleChange}
                handleOptionChange={this.handleOptionChange}
                createOption={this.createOption}
                deleteOption={this.deleteOption}
                handleSubmit={this.handleSubmit}
            />
        </div>
    );
  }
}

export default PollForm;
