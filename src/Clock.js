import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
     constructor(props) {
     super(props);
     this.state = {
              days : 0,
              hours : 0,
              minutes : 0,
              seconds : 0
          };
     }
    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }
    start(){
        let intervalId= setInterval(() => this.getTimeUntil(this.props.deadline),
    1000);
       this.setState({ intervalId:intervalId
       })
    }
    stop(){
        clearInterval(this.state.intervalId)
    }
    reset(){
        this.props.deadline = "";
    }
    leading(num){
        
        return num < 10 ? '0' + num : num;
    }
    getTimeUntil(deadline){
         const time = Date.parse(deadline) - Date.parse(new Date());
         if(time < 0){
             this.setState({days: 0, hours : 0, minutes : 0, seconds : 0})
         }else{
             const seconds = Math.floor((time/1000) % 60);
             const minutes = Math.floor((time/1000/60) % 60);
             const hours = Math.floor((time/(1000*60*60)) % 24);
             const days = Math.floor(time/(1000*60*60*60*24));
             this.setState({
                 days,
                 hours,
                 minutes,
                 seconds
             })
         }
    }
    
     render() {
          return(
               <div>
                   <div className="Clock-days">
                         {this.leading(this.state.days)} Days,
                    </div>
                    <div className="Clock-hours">
                         {this.leading(this.state.hours)} Hours,
                    </div>
                    <div className="Clock-minutes">
                         {this.leading(this.state.minutes)} Minutes,
                    </div>
                    <div className="Clock-seconds">
                         {this.leading(this.state.seconds)} Seconds
                    </div>
                    <div>
                        <input type ="button" value="reset"onClick={this.reset.bind(this)}/>
                        <input type ="button" value="pause"/>
                        <input type ="button" value="start" onClick={this.start.bind(this)}/>
                        <input type ="button" value="stop" onClick={this.stop.bind(this)}/>
                    </div>
               </div>
          );
     }
}
export default Clock;
// className="clock" style={{ "display" : "inline-flex","word-spacing": "3px"}}