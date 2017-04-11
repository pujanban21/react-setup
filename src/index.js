//describing what methods I'm using as the part of the package
import React from 'react'
import {render} from 'react-dom'
import {SkiDayList} from './components/SkiDayList'
import {SkiDayCount} from './components/SkiDayCount'
import {App} from './components/App'
import {Whoops404} from './components/Whoops404'

import {HashRouter as Router, Route} from 'react-router-dom'
window.React = React
// import {hello, goodbye,apple} from './lib'
// const style = {
//   backgroundColor: 'orange',
//   color: 'white',
//   fontFamily:'verdana'
// }
//the open tag will cause the error, so we need to use the babel
//jsx is not natively supported by the browser
//babel takes in the code that is not supported by the js and spits out the
//format supported by the js
//we can use babel, ES6
render(
  // <div>
  //   {hello}
  //   {goodbye}
  //   {apple}
  // </div>,

  // <SkiDayCount total={50}
  //               powder={20}
  //               backcountry={10}
  //               goal={100}
  //               />,
  // document.getElementById('react-container')

//changed the default properties of the SkiDayCount in  the components
//than passing it from here.

// <SkiDayCount />,
// document.getElementById('react-container')
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/ll" component={Whoops404} />
  </Router>,
  document.getElementById('react-container')
)
