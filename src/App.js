import React, { Component } from 'react';
import Nav from './components/Nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div className="container">
      <Nav />
    </div> );
  }
}
 
export default App;
