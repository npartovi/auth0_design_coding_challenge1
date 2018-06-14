import React, { Component } from 'react';
import ProfileContainer from './profiles/profile_container';
import NavbarContainer from './navbar/navbar_container';

export default class App extends Component {
  render() {
    return (
      <div className="profile-list-container">
      	<NavbarContainer />
      	<ProfileContainer />
      </div>
    );
  }
}
