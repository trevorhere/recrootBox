import campRank from './assets/todo-app.jpg';
import toDo from './assets/todo-app.jpg';
import puppiesApp from './assets/puppies-app.jpg';
import chuckNorris from './assets/chuck-norris.jpg';
import ticTacToe from './assets/tic-tac-toe.jpg';
import colorGame from './assets/color-game.jpg';

let firstName = "Trevor";
let lastName = "Lane";
let title = "Student / Web Developer";
let repoNumShow  = 5;
let bio = "I am a junior at BYU majoring in CS. I also study entrepreneurship and innovation. For the past two years I have been developing web applications using Javascript frameworks like React, React Native and Polymer. My latest project is with BYU's archaeology department, where we are building an application to digitize the processes by which archaeological data is recorded, stored, and accessed." ;
let email = "trevoranthonylane@gmail.com"
let linkedIn = "";
let gitHub = "";
let resume = "";




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
export {
    firstName,
    lastName, 
    title,
    repoNumShow, 
    bio, 
    email,
    linkedIn,
    gitHub,
    resume,
    portfolioItems
}