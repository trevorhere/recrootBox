import React from 'react';
import { showFooter } from '../ProfileInformation'
import '../App.css';

const FooterSection = () => {
  return (
    showFooter ?
      <div className="FooterSection">
        <h3>Like the site? Feel free to use it for yourself. You can find it <a href="https://github.com/trevorhere/recrootBox">here</a></h3>
      </div>
      : null
  )
}

export default FooterSection;