import React, { Component } from 'react';
import ProfileContainer from './profiles/profile_container';
import Navbar from './navbar/navbar';

export default class App extends Component {
  render() {
    return (
      <div className="profile-list-container">
      	<Navbar />
      	<ProfileContainer />
      </div>
    );
  }
}
