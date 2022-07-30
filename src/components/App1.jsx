import React from "react";

import PropTypes from "prop-types";

// import Profile from "./profile";
// import Skills from "./profile/Skills";

// import "./profile/profile.style.css";

// class Child extends React.Component {
//   render() {
//     this.props.func(this)
//     return <h1>I am child</h1>
//   }
// }

// const ChildComponents = (props) => {
//   return (
//     <div>
//       <h3>I am child component</h3>
//       <p>I dont know what to do?</p>
//       {props.children}
//     </div>
//   )
// }

const TextInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}></label>
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
};

export default class App1 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.count = 0;
  // }

  // state = {
  //   count: 0,
  // };

  // state = {
  //   count: 0,
  // };

  // increment = async () => {
  //   await this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // decrement = async () => {
  //   if (this.state.count > 0) {
  //     await this.setState({
  //       count: this.state.count - 1
  //     })
  //   }
  // }

  // getContext(context) {
  //   console.log(context)
  // }

  // changeCount = async () => {
  //   await this.setState((prev) => {
  //     return {
  //       count: prev.count + 1,
  //     };
  //   });

  //   console.log(this.state.count);
  // };

  // intervalId = null;

  // startTimer = () => {
  //   if(this.state.count > 0 && !this.intervalId) {
  //     this.intervalId = setInterval(() => {
  //       this.setState({
  //         count: this.state.count - 1
  //       }, () => {
  //         if (this.state.count === 0) {
  //           alert('timar finished');
  //           clearInterval(this.intervalId)
  //           this.intervalId = null;
  //         }
  //       })
  //     }, 1000)
  //   }
  // }

  // stopTimer = () => {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId)
  //     this.intervalId = null;
  //   }
  // }

  // resetTimer = () => {
  //   this.setState({count: 0});
  //   clearInterval(this.intervalId)
  //   this.intervalId = null;
  // }

  // handleButtonClick = (event) => {
  //   console.log(event.target);
  // };

  // state = {
  //   name: "",
  // };

  // handleChange = (e) => {
  //   this.setState({ name: e.target.value });
  // };

  // handleFocus = (e) => {
  //   console.log("I am focus event");
  // };

  // handleBlur = (e) => {
  //   if (!this.state.name) {
  //     alert("please enter your name");
  //   }
  // };

  // state = {
  //   name: "",
  //   country: "bangladesh",
  //   bio: "",
  //   birthDay: "",
  //   gender: "",
  //   agree: false,
  //   skills: [],
  // };

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // handleCheckbox = (e) => {
  //   this.setState({
  //     agree: e.target.checked,
  //   });
  // };

  // handleSkillChange = (e) => {
  //   if (e.target.checked) {
  //     this.setState({
  //       skills: [...this.state.skills, e.target.value]
  //     })
  //   } else {
  //     const skills = this.state.skills.filter((skill) => skill  !== e.target.value)
  //     this.setState({
  //       skills
  //     })
  //   }
  // }

  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    // this.getContext(this)
    // const { name, country, bio, birthDay, agree, skills } = this.state;

    const { name, email, password } = this.state;
    return (
      <div className="container card card-body mt-5">
        <h1 className="hello text-center">Hello React, You Are Awesome</h1>

        <div>
          <form onSubmit={this.handleSubmit}>
            <TextInput
              name="name"
              label="Name"
              placeholder="name"
              value={name}
              onChange={this.handleChange}
            />
            <TextInput
              name="email"
              type="email"
              label="email"
              placeholder="email"
              value={email}
              onChange={this.handleChange}
            />
            <TextInput
              name="password"
              type="password"
              label="password"
              placeholder="password"
              value={password}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-success mt-2">
              Submit
            </button>
          </form>
        </div>

        {/* <div className="card card-body">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <select
            name="country"
            className="form-control"
            onChange={this.handleChange}
            value={country}
          >
            <option value="bangladesh">Bangladesh</option>
            <option value="pakistan">Pakistan</option>
            <option value="india">India</option>
          </select>
          <br />
          <textarea
            name="bio"
            placeholder="bio"
            className="form-control"
            value={bio}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <input
            type="date"
            name="birthDay"
            className="form-control"
            onChange={this.handleChange}
            value={birthDay}
          />
          <br />
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
            />
            Male <br />
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />
            Female <br />
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={this.handleChange}
            />
            Other <br />
          </div>
          <div>
            <h4>Skills: </h4>
            <input
              type="checkbox"
              name="skills"
              value="java"
              checked={skills.includes("java")}
              onChange={this.handleSkillChange}
            />Java
            <br />
            <input
              type="checkbox"
              name="skills"
              value="javascript"
              checked={skills.includes("javascript")}
              onChange={this.handleSkillChange}
            />javascript
            <br />
            <input
              type="checkbox"
              name="skills"
              value="python"
              checked={skills.includes("python")}
              onChange={this.handleSkillChange}
            />python
            <br />
            <input
              type="checkbox"
              name="skills"
              value="golang"
              checked={skills.includes("golang")}
              onChange={this.handleSkillChange}
            />golang
            <br />
          </div>
          <div>
            <input
              type="checkbox"
              name="agree"
              checked={agree}
              onChange={this.handleCheckbox}
            />
            I agrre with all terms and conditions
            <br />
            <br />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => console.log(this.state)}
          >
            Show data
          </button>
        </div> */}

        {/* <button onClick={this.handleButtonClick}>Click Me</button>
        <br />
        <input
          type="text"
          placeholder="Enter some text"
          value={this.state.name}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <br />
        <br />
        {this.state.name ? <p>welcome, {this.state.name}</p> : ""} */}

        {/* <div className="container">
          <button onClick={this.decrement}> - </button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}> + </button>
          <div className="container">
            <button onClick={this.startTimer}>start</button>
            <button onClick={this.stopTimer}>stop</button>
            <button onClick={this.resetTimer}>reset</button>
          </div>
        </div> */}

        {/* <h1>Count - {this.state.count}</h1>
        <button onClick={this.changeCount}>Add +1</button> */}

        {/* <Child func={this.getContext} /> */}

        {/* <ChildComponents>
          <h2>hello i am from parent</h2>
          <h4>i am child of Child component</h4>
        </ChildComponents> */}

        {/* <Profile /> */}

        {/* <div style={{marginTop: '30px', marginBottom: '30px'}}>
          <h3>Lists of Programmers</h3>
          <p>Mr. X</p>
          <Skills/>
          <p>Mr. Y</p>
          <Skills/>
        </div> */}

        {/* <MyProps name="Abdulla Mazumder" />
        <MyProps name="Imran Hossain" /> */}
      </div>
    );
  }
}

// function myFunctionComponent() {
//   const name = "Abdullah Mazumder";
//   return <h1>i am functional </h1>;
// }
