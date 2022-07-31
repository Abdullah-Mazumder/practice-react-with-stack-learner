import PropTypes from "prop-types";
import React from "react";
import { Input, Label } from "reactstrap";

const ViewController = ({ view, changeView }) => (
  <div className="d-flex">
    <Label for="list-viw" style={{ marginRight: "10px" }}>
      <Input
        type="radio"
        name="view"
        value={"list"}
        id="list-view"
        onChange={changeView}
        className="d-inline-block"
        checked={view === "list"}
      />{" "}
      List View
    </Label>
    <Label for="table-viw" className="mr-4">
      <Input
        type="radio"
        name="view"
        value={"table"}
        id="table-view"
        onChange={changeView}
        className="d-inline-block"
        checked={view === "table"}
      />{" "}
      Table View
    </Label>
  </div>
);

ViewController.propType = {
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default ViewController;
