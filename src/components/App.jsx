import React from "react";

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

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.count = 0;
  // }

  // state = {
  //   count: 0,
  // };

  state = {
    count: 0,
  };

  increment = async () => {
    await this.setState({
      count: this.state.count + 1
    })
  }

  decrement = async () => {
    if (this.state.count > 0) {
      await this.setState({
        count: this.state.count - 1
      })
    }
  }

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

  intervalId = null;

  startTimer = () => {
    if(this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({
          count: this.state.count - 1
        }, () => {
          if (this.state.count === 0) {
            alert('timar finished');
            clearInterval(this.intervalId)
            this.intervalId = null;
          }
        })
      }, 1000)
    }
  }

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null;
    }
  }

  resetTimer = () => {
    this.setState({count: 0});
    clearInterval(this.intervalId)
    this.intervalId = null;
  }

  render() {
    // this.getContext(this)
    return (
      <div>
        <h1 className="hello">Hello React, You Are Awesome</h1>


        <div className="container">
          <button onClick={this.decrement}> - </button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}> + </button>
          <div className="container">
            <button onClick={this.startTimer}>start</button>
            <button onClick={this.stopTimer}>stop</button>
            <button onClick={this.resetTimer}>reset</button>
          </div>
        </div>


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
