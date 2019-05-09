import React, { Component } from 'react';
import { showFooter } from '../ProfileInformation'
import '../App.css';

class FooterSection extends Component {
  render() {
    if(showFooter){
      return (
        <div className="FooterSection">
          <h3>Like the site? Feel free to use it for yourself. You can find it <a href="https://github.com/trevorhere/recrootBox">here</a></h3>
        </div>
      );
    }
    else
    {
      return null;
    }
  }
}

export default FooterSection;
