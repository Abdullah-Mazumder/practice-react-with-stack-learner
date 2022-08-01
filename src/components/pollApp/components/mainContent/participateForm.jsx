import React from "react";
import {
    Button,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label
} from "reactstrap";

export default class ParticipationForm extends React.Component {
  state = {
    name: "",
    selectedOption: "",
    errors: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { errors, isValid } = this.validate();

    if (isValid) {
      this.props.getOpinion({
        pollId: this.props.poll.id,
        name: this.state.name,
        selectedOption: this.state.selectedOption,
      });
      e.target.reset();
      this.setState({
        name: "",
        selectedOption: "",
        errors: {},
      });
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};

    if (!this.state.name) {
      errors.name = "Please Provide A Name";
    } else if (this.state.name.length > 20) {
      errors.name = "Name Too Long";
    }

    if (!this.state.selectedOption) {
      errors.selectedOption = "Please Select One Option";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <div className="d-flex">
            <h4>Options</h4>
            <Button
              color="warning"
              type="button"
              onClick={this.props.toggleModal}
              style={{ marginLeft: "auto" }}
            >
              Edit
            </Button>
            <Button
              color="danger"
              type="button"
              onClick={() => this.props.deletePoll(this.props.poll.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </Button>
          </div>
          {this.props.poll.options.map((opt) => (
            <FormGroup className="my-2" key={opt.id}>
              <Label className="d-flex">
                <Input
                  style={{ marginRight: "5px" }}
                  type="radio"
                  id={opt.id}
                  name="selectedOption"
                  value={opt.id}
                  onChange={this.handleChange}
                  invalid={this.state.errors.selectedOption ? true : false}
                />
                {opt.value}
                <Button
                  style={{ marginLeft: "auto" }}
                  className="btn btn-success"
                >
                  {opt.vote}
                </Button>
                <Button
                  style={{ marginLeft: "10px" }}
                  className="btn btn-warning"
                >
                  {this.props.poll.totalVote > 0
                    ? ((100 * opt.vote) / this.props.poll.totalVote).toFixed(2)
                    : 0}
                  %
                </Button>
              </Label>
            </FormGroup>
          ))}
          <FormGroup className="my-3">
            <Label>Enter Your Name</Label>
            <Input
              name="name"
              placeholder="Name"
              value={this.state.value}
              onChange={this.handleChange}
              invalid={this.state.errors.name ? true : false}
            />
            {this.state.errors.name && (
              <FormFeedback>{this.state.errors.name}</FormFeedback>
            )}
          </FormGroup>
          <Button type="submit">Submit Your Opinion</Button>
        </Form>
      </div>
    );
  }
}
