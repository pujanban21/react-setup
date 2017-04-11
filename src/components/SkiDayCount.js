// import {Component} from 'react'
import'../stylesheets/ui.scss'
import Terrain from "react-icons/lib/md/terrain"
import SnowFlake from "react-icons/lib/ti/weather-snow"
import Calender from "react-icons/lib/fa/calendar"

import PropTypes from 'prop-types'
// export class SkiDayCount extends Component {
//
//   percentToDecimal(decimal){
//     return((decimal * 100) + '%')
//   }
//   calcGoalProgress(total, goal){
//     return this.percentToDecimal(total/goal)
//   }
//   render() {
//     return(
//       <div className="ski-day-count">
//         <div className="total-days">
//           <span> {this.props.total}</span>
//         </div>
//         <div className="powder-days">
//         <span>{this.props.powder}</span>
//         </div>
//         <div className="back-country-days">
//           <span>{this.props.backcountry}</span>
//         </div>
//         <div>
//           <span>{this.calcGoalProgress(this.props.total, this.props.goal)}
//           </span>
//         </div>
//       </div>
//     )
//   }
// }

const percentToDecimal =(decimal)=>{
  return ((decimal *100) + '%')
}

const calcGoalProgress=(total,goal) =>{
  return percentToDecimal(total/goal)
}
export const SkiDayCount = (props) => (
  <div className="ski-day-count">
    <div className="total-days">
      <span> {props.total}</span>
      <Calender />
      <span>days</span>
    </div>
    <div className="powder-days">
    <span>{props.powder}</span>
    <SnowFlake/>
    <span>days</span>
    </div>
    <div className="back-country-days">
      <span>{props.backcountry}</span>
      <Terrain/>
      <span>days</span>
    </div>
    <div>
      <span>{calcGoalProgress(props.total,props.goal)}
      </span>
    </div>
  </div>
)

//this is the standard way of defining ESG6 default properties
SkiDayCount.defaultProps ={
  total:50,
  powder:10,
  backcountry:15,
  goal:75
}

SkiDayCount.propTypes = {
  total:PropTypes.number,
  powder:PropTypes.number,
  backcountry:PropTypes.number,
  goal:PropTypes.number
}
