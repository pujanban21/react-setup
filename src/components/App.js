//this is create class Component

import { createClass} from 'react'

export const App = createClass({
//when the app renders for the first time
  getInitialState(){
    return{
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
  },
  render (){
    return (
      <div className = "app">
      {this.state.allSkiDays[0]["resort"]}
      </div>
    )
  }
})
