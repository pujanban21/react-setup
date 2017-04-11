//this is create class Component

import { Component} from 'react'
import {SkiDayList} from './SkiDayList'
import {SkiDayCount} from './SkiDayCount'
export class App extends Component{
//when the app renders for the first time
    constructor(props){
      super(props)
      this.state = {
        allSkiDays:
        [
          {
            resort: "Square Valley",
            date: new Date("1/2/2016"),
            powder:true,
            backcountry:false
          },
          {
            resort: "Kirkwood",
            date: new Date("3/28/2016"),
            powder:false,
            backcountry:false
          },
          {
            resort: "Squaw Valley",
            date: new Date("4/2/2016"),
            powder:false,
            backcountry:true
          }
        ]
      }
    }
  countDays(filter){
    const {allSkiDays} = this.state
    return allSkiDays.filter(
      (day) =>(filter) ? day[filter] : day).length
  }
  render (){
    return (
      <div className = "app">
        <SkiDayList days = {this.state.allSkiDays}/>
        <SkiDayCount total={this.countDays()}
                    powder={this.countDays("powder")}
                    backcountry={this.countDays("backcountry")}this/>
      </div>
    )
  }
}
