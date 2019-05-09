// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
import selfie from "./assets/trevor.png";

//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

import recrootBox from "./assets/recrootBox_site.png";
import campRank from "./assets/camprank_site.png";
import blogApp from "./assets/blogapp-site.png";
import taskyv from "./assets/taskyv_site.png";
import bookThinks from "./assets/bookThinks.png";

import resume from "./assets/Resume.pdf";

//Edit portfolio items here by changing title, image title, and link
// -- you can adjust the number of items as needed. For display purposes, it's best to use
// -- multiples of 3.
let portfolioItems = [
  {
    imageUrl: taskyv,
    title: "Taskyv",
    description: "Sleek, sexy task manager",
    link: "https://taskyv.herokuapp.com/"
  },
  {
    imageUrl: bookThinks,
    title: "BookThinks",
    description: "Book-centric note recorder",
    link: "https://bookthinks.herokuapp.com/"
  },
  {
    imageUrl: recrootBox,
    title: "Recroot Box",
    description: "Easy to user porfolio-site template",
    link: "https://trevorhere.github.io/recrootBox/"
  },
  {
    imageUrl: campRank,
    title: "CampRank",
    description: "Post, rank and comment about your favorite campsites",
    link: "https://desolate-falls-89173.herokuapp.com/"
  },
  {
    imageUrl: blogApp,
    title: "Blog App",
    description: "Easy access blog app.",
    link: "https://boiling-harbor-27900.herokuapp.com"
  }
  // {
  //   imageUrl: chuckNorris,
  //   title: "Chuck Norris Quote Fetcher",
  //   link: "#"
  // },
  // {
  //   imageUrl: ticTacToe,
  //   title: "Tic Tac Toe",
  //   link: "#"
  // },
];

// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Trevor";
let lastName = "Lane";
let title = "Student / Software Developer";
let bio = `Hey there, I'm currently studying computer science
   at Brigham Young University and working as a Software
   Engineering Intern at SimpleNexus.
   Feel free to reach out, take a look at some things i've built
   here, or checkout my code on github.`;

//Edit links to external accounts or items here (e.g. github, linkedIn, leetcode, resume, etc.)
// -- For display purposes, it's best to use between 3 and 5 links, but if you add more or less,
// -- the page will adjust accordingly.
let links = [
  {
    name: "Email",
    link: "mailto:trevor@trevorlane.net"
  },
  {
    name: "GitHub",
    link: "https://github.com/trevorhere"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/trevor-lane-8615a9106/"
  },
  {
    name: "Resume",
    link: resume
  }
];

// If you do not want the footer to be displayed (it just has a link to the github repo
// -- for this template ) then you can set showFooter to false and it will go away.
let showFooter = true;

export {
  firstName,
  lastName,
  title,
  bio,
  portfolioItems,
  selfie,
  showFooter,
  links
};
