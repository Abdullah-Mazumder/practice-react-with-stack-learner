import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

import Controller from "../controllers/index";
import ListView from "../listview";
import TableView from "../tableView";
import CreateTodoForm from "./createTodoForm";

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: "dffkddf",
        text: "hello world 1",
        description: "fdjfkjk fjkfk kdfkdf dfjflkfkf",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "dffkddflkdfk",
        text: "hello world 2",
        description: "fdjfkjk fjkfk kdfkdf dfjflkfkf",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "dffkddflkdfkkjgkf",
        text: "hello world 3",
        description: "fdjfkjk fjkfk kdfkdf dfjflkfkf",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
    view: "list",
    filter: "all",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  handleSearch = (value) => {
    this.setState({
      searchTerm: value,
    });
  };

  handleFilter = (value) => {
    this.setState({ filter: value });
  };

  changeView = (e) => {
    this.setState({
      view: e.target.value,
    });
  };

  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => todo.isSelect === false);
    this.setState({ todos });
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => todo.isComplete === false);
    this.setState({ todos });
  };

  reset = () => {
    this.setState({
      isOpenTodoForm: false,
      view: "list",
      filter: "all",
      searchTerm: "",
    });
  };

  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete === true);
    } else if (filter === "running") {
      return todos.filter((todo) => todo.isComplete === false);
    } else {
      return todos;
    }
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm)
    );
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <div>
        <h3 className="text-center my-3">List View</h3>
        <ListView
          todos={todos}
          toggleSelect={this.toggleSelect}
          toggleComplete={this.toggleComplete}
        />
      </div>
    ) : (
      <div>
        <h3 className="text-center my-3">Table View</h3>
        <TableView
          todos={todos}
          toggleSelect={this.toggleSelect}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  };

  createTodo = (todo) => {
    todo.id = Date.now();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  render() {
    return (
      <div className="container card card-body">
        <h1 className="display-4 text-center mb-3">Todo App</h1>
        <div className="card card-body">
          <Controller
            view={this.state.view}
            term={this.state.searchTerm}
            toggleForm={this.toggleForm}
            handleSearch={this.handleSearch}
            handleFilter={this.handleFilter}
            changeView={this.changeView}
            clearSelected={this.clearSelected}
            clearCompleted={this.clearCompleted}
            reset={this.reset}
          />
        </div>
        <div className="card card-body my-4">{this.getView()}</div>
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create New Todo Item
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
