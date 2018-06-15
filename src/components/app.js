import React from 'react';
import ProfileContainer from './profiles/profile_container';
import NavbarContainer from './navbar/navbar_container';

class App extends React.Component {
  render() {
    return (
      <div className="profile-list-container">
      	<NavbarContainer />
      	<ProfileContainer />
      </div>
    );
  }
}

export default App