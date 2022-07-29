import React from "react";

// import Profile from "./profile";
// import Skills from "./profile/Skills";

// import "./profile/profile.style.css";

export default class App extends React.Component {
  getContext(context) {
    console.log(context)
  }

  render() {
    this.getContext(this)
    return (
      <div>
        <h1 className="hello">Hello React, You Are Awesome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex, libero beatae, illum animi hic omnis expedita iste recusandae aspernatur earum dicta voluptate! Autem aspernatur maiores, rem animi tempore ea?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, esse. Hic natus reiciendis repellendus rerum nisi deleniti tempora laborum eaque ut repudiandae soluta velit dicta, recusandae, reprehenderit sunt? Perspiciatis, quasi!</p>

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
