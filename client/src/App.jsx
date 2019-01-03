import React, { Component } from 'react';

import Schedule from './components/Schedule.jsx';
import Feed from './components/Feed.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      ramsFeed: [],
      // home view should render schedule sidebar and gamefeed on the same page
        // for now, test components by changing the "view" property until changeView method is implemented
      view: 'feed'
    };
  }

  componentDidMount() {
    fetch('espn/schedules')
    .then(res => res.json())
    .then(data => {
      this.setState({
        schedule: data,
      })
    })
    .catch((err) => {
      console.log('error: ', err);
    });

    fetch('espn/feeds')
    .then(res => res.json())
    .then(data => {
      this.setState({
        ramsFeed: data,
      })
    })
    .catch((err) => {
      console.log('error: ', err);
    });
  }

  // TODO
  // implement changeView method to switch from main page to schedule page

  renderView() {
    // receives props object, destructure properties
    const { schedule, ramsFeed, view } = this.state;
    if(view === 'home') {
      return (
        <div id='home'>
          <div id='schedule'>
            <Schedule
              ramsSchedule={schedule}
            />
          </div>
            <div id='feed'>
            <Feed
              ramsFeed={ramsFeed}
            />
          </div>
        </div>
      )
    }
    if(view === 'schedule') {
      return(
        <div id='schedule'>
          <Schedule
            ramsSchedule={schedule}
          />
        </div>
      )
    }
    if(view === 'feed') {
      return (
        <div id='feed'>
          <Feed
            ramsFeed={ramsFeed}
          />
        </div>
      )
    }

  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }

}

export default App;
