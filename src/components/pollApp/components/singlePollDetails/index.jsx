import React from "react";

import FilterButtons from "./filterButtton";
import ListOfName from "./listOfName";

export default class SinglePollDetails extends React.Component {
  render() {
    return (
      <div className="p-4">
        <h3 className="text-center mb-3">Single Poll Details</h3>
        <FilterButtons
          filterTerm={this.props.filterTerm}
          poll={this.props.poll}
          handleFilter={this.props.handleFilter}
        />
        <ListOfName
          searchOption={this.props.searchOption}
          opinions={this.props.opinions}
          options={this.props.options}
        />
      </div>
    );
  }
}
