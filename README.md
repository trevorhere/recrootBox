# recrootBox

Portfolio site template for those new to web development.
Step by step video instructions can be found here: [📺](https://www.youtube.com/watch?v=tz04HiWaPfc)

## Installation

1. Fork this repository onto your own github account
2. Clone the repository locally
3. Open `recrootBox/src/ProfileInformation.js` and follow instructions in this file to add your information including your bio, image links, project titles, project links, etc.

## Deploying the portfolio

#### Previously, I recommended using github pages to host the project. Recently, I've found [netlify](https://www.netlify.com/) to be easier to use. 

### Netlify

1. Create a new site in netlify. 
2. Link this site to the recrootBox repo that you forked. 
3. In netlify deploy settings, specify `/build` as the content directory
4. In netlify deploy settings, specify `npm i && npm run build` as the deploy command


![deploy_settings](https://i.imgur.com/in3hNWR.png)

### Github Pages

You can use [github Pages](https://pages.github.com/) as a free hosting platform, to do so, follow these [instructions.](https://medium.com/@_mariacheline/deploy-create-react-app-project-to-github-pages-2eb6deda5b89)

[View Demo](http://trevorhere.github.io/recrootBox)

### Self Hosted:

Running your own webserver:

1. Clone your repository onto your hosting environment
2. run `yarn build`
3. copy the contents of `/build` to the folder on your server
4. enjoy