import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: [], stringText: null };
    
    // this.ref = ''
  }

  textChange = eventText => {
    // this.state.push(eventText.split(/(?!$)/u))

    this.setState({ text: [...eventText.split("")] });
    this.setState({stringText: eventText})
    console.log(this.state.text, "array!!!");
  };

deleteLetter = (letter,i) => {
var array = [...this.state.text]
array.splice(i,1)
this.setState({ text: array})
this.setState({stringText: array.join("")})
// this.refs.someName.value = ''

console.log('hey',i)
}

  render() {
    this.setState();
    return (
      <div className="App">

      
        <input
          value = {this.state.stringText} 
          onChange={event => {
            this.textChange(event.target.value);
          }}
          ref="someName"
        />
<div class = "break"></div>
        {this.state.text.map((item, i) => (
          
          <h1
            onClick={(event) => this.deleteLetter(event.target.value,i)}
            id="h1"
            key={i}
            style={{
              border: "2px solid black"
            }}
          >
            {item}
          </h1>
          
        ))}
        {/* <h1> {this.state.text} </h1>  */}
        {console.log(this.state.text, "state!!")}
      </div>
    );
  }
}

export default App;
