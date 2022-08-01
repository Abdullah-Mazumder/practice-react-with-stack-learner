import PropTypes from "prop-types";
import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import shortid from "shortid";

const FilterButtons = (props) => {
  const { options } = props.poll;

  if (options) {
    return (
      <div>
        <ButtonGroup>
          <Button
            className={props.filterTerm === '' ? "active" : ''}
            key={shortid.generate()}
            onClick={(e) => props.handleFilter("", e)}
            color={"success"}
          >
            All
          </Button>
          {options.map((opt) => (
            <Button
              className={props.filterTerm === opt.id ? 'active' : ''}
              onClick={(e) => props.handleFilter(opt.id, e)}
              color="success"
              key={shortid.generate()}
            >
              {opt.value}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
};

FilterButtons.propType = {
  props: PropTypes.object.isRequired,
};

export default FilterButtons;
