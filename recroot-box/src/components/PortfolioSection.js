import React, { Component } from 'react';
import PortfolioSectionItem from './PortfolioSectionItem';

import campRank from '../assets/camp-rank.jpg';
import toDo from '../assets/todo-app.jpg';
import puppiesApp from '../assets/puppies-app.jpg';
import chuckNorris from '../assets/chuck-norris.jpg';
import ticTacToe from '../assets/tic-tac-toe.jpg';
import colorGame from '../assets/color-game.jpg';

let portfolioItems = [
  { 
    imageUrl: campRank , 
    title: "Camp Rank",
    description: "",
    link: "https://desolate-falls-89173.herokuapp.com/"
  },
  { 
    imageUrl: toDo , 
    title: "To Do",
    description: "",
    link: "http://trevorlane.xyz/todo/"
  },
  { 
    imageUrl: puppiesApp , 
    title: "Blog App",
    description: "",
    link: "https://boiling-harbor-27900.herokuapp.com/blogs"
  },
  { 
    imageUrl: chuckNorris , 
    title: "Chuck Norris",
    description: "",
    link: "testLink"
  },
  { 
    imageUrl: ticTacToe , 
    title: "Tic Tac Toe",
    description: "",
    link: "http://trevorlane.xyz/tictactoe/"
  },
  { 
    imageUrl: colorGame , 
    title: "Color Game",
    description: "",
    link: "http://trevorlane.xyz/colorGame/"
  },
]

class PortfolioSection extends Component {
  render() {
    return (
      <div className="PortfolioSection">
                {portfolioItems.map(function(item,index){
                    return (
                      <PortfolioSectionItem
                      key = {index}
                      ImageUrl = {item.imageUrl}
                      Title =   {item.title}
                      Description = {item.description}
                      Link =  {item.link}
                      />
                    )
                  })}
      </div>
    );
  }
}

export default PortfolioSection;
