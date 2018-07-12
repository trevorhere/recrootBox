
// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
import selfie from './assets/cat.jpg';

//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions
import example1   from './assets/code.jpeg';
import example2   from './assets/code.jpeg';
import example3   from './assets/code.jpeg';
import example4   from './assets/code.jpeg';
import example5   from './assets/code.jpeg';
import example6   from './assets/code.jpeg';

//Edit portfolio items here by changing title, image title, and link
// -- you can adjust the number of items as needed. For display purposes, it's best to use
// -- multiples of 3. 
let portfolioItems = [
  { 
    imageUrl: example1, 
    title: "Example One",
    link: "#"
  },
  { 
    imageUrl: example2, 
    title: "Example Two",
    link: "#"
  },
  { 
    imageUrl: example3, 
    title: "Example Three",
    link: "#"
  },
  { 
    imageUrl: example4, 
    title: "Example Four",
    link: "#"
  },
  { 
    imageUrl: example5, 
    title: "Example Five",
    link: "#"
  },
  { 
    imageUrl: example6, 
    title: "Example Six",
    link: "#"
  },
]


// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Mr.";
let lastName = "Cat";
let title = "Cat / Mouse Hunter";
let bio = "The domestic cat (Felis silvestris catus or Felis catus)[1][5] is a small, typically furry, carnivorous mammal. They are often called house cats[6] when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. They are often valued by humans for companionship and for their ability to hunt vermin. There are more than seventy cat breeds recognized by various cat registries." ;


//Edit links to external accounts or items here (e.g. github, linkedIn, leetcode, resume, etc.)
// -- For display purposes, it's best to use between 3 and 5 links, but if you add more or less,
// -- the page will adjust accordingly. 
let links = [
  { 
    name: "exampleLink1",
    link:"exampleLink1.com"
  },
  {
    name: "exampleLink2",
    link: "exampleLink2.com"
  },
  {
    name: "exampleLink3",
    link: "exampleLink3.com"
  },
  {
    name: "exampleLink4",
    link: "exampleLink4.com"
  },
]

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
}