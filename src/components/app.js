import React, { Component } from 'react';
import ProfileContainer from './profiles/profile_container';

export default class App extends Component {
  render() {
    return (
      <div className="profile-list-container">
      	<ProfileContainer />
      </div>
    );
  }
}
