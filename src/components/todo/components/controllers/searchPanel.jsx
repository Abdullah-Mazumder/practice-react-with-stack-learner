import PropTypes from 'prop-types';
import React from "react";
import { Button, Input } from 'reactstrap';

const SearchPanel = ({term, handleSearch, toggleForm}) => (
    <div className="d-flex">
        <Input 
            placeholder="Enter Search Term"
            style={{marginRight: '10px'}}
            value={term}
            onChange={e => handleSearch(e.target.value)}
        />
        <Button color="success" onClick={toggleForm}>
            New
        </Button>
    </div>
)

SearchPanel.propType = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SearchPanel;