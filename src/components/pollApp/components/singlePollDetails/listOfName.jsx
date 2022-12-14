import React from "react";
import { Table } from "reactstrap";
import shortid from "shortid";

const RowOfName = ({ opinion, searchOption, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{opinion.name}</td>
      <td>{searchOption(opinion.selectedOption)}</td>
    </tr>
  );
};

const ListOfName = ({ searchOption, opinions, options }) => {
  if (opinions) {
    return (
      <div className="card card-body mt-4">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Selected Option</th>
            </tr>
          </thead>
          <tbody>
            {opinions.map((opinion, index) => (
              <RowOfName
                opinion={opinion}
                index={index}
                searchOption={searchOption}
                key={shortid.generate()}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default ListOfName;
