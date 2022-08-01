import React from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const MyForm = ({
  title,
  description,
  options,
  errors,
  buttonValue,
  handleChange,
  handleOptionChange,
  createOption,
  deleteOption,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input
        id="title"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}
        invalid={errors.title ? true : false}
      />
      {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
    </FormGroup>
    <FormGroup>
      <Label for="description">Title</Label>
      <Input
        type="textarea"
        id="description"
        name="description"
        placeholder="Describe Your Poll"
        value={description}
        onChange={handleChange}
        invalid={errors.description ? true : false}
      />
      {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
    </FormGroup>
    <FormGroup>
      <Label className="d-flex align-items-center">
        <p>Enter Options</p>
        <Button
          className="btn-success"
          style={{
            marginLeft: "auto",
          }}
          onClick={createOption}
        >
          Add Option
        </Button>
      </Label>
      {options.map((opt, index) => {
        return (
          <div className="d-flex my-2" key={opt.id}>
            <Input
              style={{ marginRight: "10px" }}
              value={opt.value}
              onChange={(e) => handleOptionChange(e, index)}
              invalid={errors.options && errors.options[index] ? true : false}
            />
            <Button
              color="danger"
              disabled={options.length <= 2}
              className="ml-2"
              onClick={() => deleteOption(index)}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </FormGroup>
    <Button color="primary" type="submit">
      {buttonValue}
    </Button>
  </Form>
);

export default MyForm;
