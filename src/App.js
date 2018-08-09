import React, { Component } from 'react';
import Layout from './components/Layout';
import './styles/layout.css';

class App extends Component {  
  render() {
    return (
      <div className="container">
        <Layout title="Watch :D"/>
      </div>
    );
  }
}

export default App;