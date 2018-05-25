import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
              deadline : '',

          }
          this.handleChange= this.handleChange.bind(this);
     }
     handleChange(event){
         const name = event.target.name;
          const value= event.target.value;

          switch (name) {
              case "deadline":
              this.setState({
                  deadline : value
              })
          }
     }
     render() {
          return (
              <div className="App" style={{"textAlign":"center","backgroundColor":"darksalmon"}}>
              <label>Enter time and date</label><br/>
              <input type ="text" name="deadline" value={this.state.deadline} onChange= {this.handleChange}/><br/><br/>
              <div className="App-title">
                    Logout : Finally Chill
              </div>
              <div className="App-date">
                  {this.state.deadline}
              </div>

              <Clock deadline= {this.state.deadline}/>
              </div>
          );
     }
}
export default App;