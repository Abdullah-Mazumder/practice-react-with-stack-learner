import PropTypes from "prop-types";
import React from "react";

import { Button, Input, ListGroup, ListGroupItem } from "reactstrap";

// listitem component
const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex align-items-center">
      <Input
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
      <div className="mx-3">
        <h4>{todo.text}</h4>
        <p className="mb-0">{todo.time.toDateString()}</p>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Button
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </div>
    </ListGroupItem>
  );
};

ListItem.proptype = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <div className="w-100">
      <ListGroup>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
          />
        ))}
      </ListGroup>
    </div>
  );
};

ListView.proptype = {
  todos: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
