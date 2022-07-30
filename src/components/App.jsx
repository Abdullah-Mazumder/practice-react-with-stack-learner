import React from "react";

import SignupForm from "./sign-up-form/index";

class App extends React.Component {
  state = {
    users: [],
  };

  createUser = (user) => {
    user.id = Date.now();
    this.setState({
      users: [...this.state.users, user],
    });
  };

  render() {
    return (
      <div>
        <SignupForm createUser={this.createUser} />

        <div className="container mt-5 p-5 card card-body">
          <h3>All Registered Users</h3>
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li className="list-group-item" key={user.id}>
                {user.name} -> {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
