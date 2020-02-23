import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
import selfie from "../images/trevor.png";

//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

import recrootBox from "../images/recrootBox_site.png";
import campRank from "../images/camprank_site.png";
import blogApp from "../images/blogapp-site.png";
import taskyv from "../images/taskyv_site.png";
import bookThinks from "../images/bookThinks.png";

import resume from "../assets/Resume.pdf";

let darkModeSwitch = true;
let darkMode = false;
let accent = "#003344"


// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Trevor";
let lastName = "Lane";
let title = "Student / Software Developer";
let bio = `Currently studying Computer Science at Brigham Young University 
and working as a software engineering intern at a company called SimpleNexus 
where I work with Vue.js & Rails. 
Feel free to check out some of my past projects below, browse some code on my github profile, or just reach out to say hi!`;

//Edit links to external accounts or items here (e.g. github, linkedIn, leetcode, resume, etc.)
// -- For display purposes, it's best to use between 3 and 5 links, but if you add more or less,
// -- the page will adjust accordingly.

let userIcons = true;

let links = [
  {
    name: "Email",
    link: "mailto:trevor@trevorlane.net",
    icon: FaEnvelope
  },
  {
    name: "GitHub",
    link: "https://github.com/trevorhere",
    icon: FaGithub

  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hi-there-trevor-here/",
    icon: FaLinkedin

  },
  {
    name: "Resume",
    link: resume,
    icon: FaFileAlt

  }
];

//Edit portfolio items here by changing title, image title, and link
// -- you can adjust the number of items as needed. For display purposes, it's best to use
// -- multiples of 3.

let portfolioTitle = "Recent Projects"
let portfolioSectionBackgroundColor = "#003344"
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
    link: "https://github.com/trevorhere/recrootBox/"
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
];


// If you do not want the footer to be displayed (it just has a link to the github repo
// -- for this template ) then you can set showFooter to false and it will go away.
let showFooter = true;
let blogName = "./log";
let renderBlog = true;
let gistUrl = `https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4`

export {
  firstName,
  lastName,
  title,
  bio,
  portfolioTitle,
  portfolioItems,
  portfolioSectionBackgroundColor,
  selfie,
  showFooter,
  links,
  userIcons,
  darkModeSwitch,
  darkMode,
  accent,
  blogName,
  renderBlog,
  gistUrl
};