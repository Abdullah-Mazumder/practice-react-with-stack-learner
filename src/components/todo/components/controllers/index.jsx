import PropTypes from "prop-types";
import React from "react";
import { Col, Row } from "reactstrap";

import BulkController from "./bulkController";
import FilterController from "./filterController";
import SearchPanel from "./searchPanel";
import ViewController from "./viewController";

const Controller = ({
  term,
  handleSearch,
  toggleForm,
  handleFilter,
  view,
  changeView,
  clearSelected,
  clearCompleted,
  reset,
}) => (
  <div>
    <div className="card card-body">
      <SearchPanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
      />
    </div>
    <div className="card card-body mt-3">
      <Row className="d-flex align-items-center">
        <Col md={{ size: 4 }}>
          <FilterController handleFilter={handleFilter} />
        </Col>
        <Col md={{ size: 4 }}>
          <ViewController view={view} changeView={changeView} />
        </Col>
        <Col md={{ size: 4 }} className="d-flex">
          <div style={{ marginLeft: "auto" }}>
            <BulkController
              clearSelected={clearSelected}
              clearCompleted={clearCompleted}
              reset={reset}
            />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

Controller.propTypes = {
  term: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Controller;
