# recrootBox

Portfolio site template for those new to web development.
Step by step video instructions can be found here: [📺](https://www.youtube.com/watch?v=tz04HiWaPfc)

##### _Note:_ 
* _RecrootBox was switched over from React.js to Gatsby.js on 2/20/20, the only change in terms of settings is the netlify deploy settings_
* _The instructions in the video above are geared toward deploying to github pages_
* _A new video with up-to-date instructions will be released shortly_


## Installation

1. Fork this repository onto your own github account
2. Clone the repository locally
3. Open `recrootBox/src/components/ProfileInformation.js` and follow instructions in this file to add your information including your bio, image links, project titles, project links, etc.

## Deploying recrootBox

#### Previously, I recommended using github pages to host the project. Recently, I've found [netlify](https://www.netlify.com/) to be easier to use. 

### Netlify

1. Create a new site in netlify. 
2. Link your new netlify site to the recrootBox repo that you forked. 
3. In netlify deploy settings, specify `/build` as the content directory
4. In netlify deploy settings, specify `npm i && npm run build` as the deploy command


![deploy_settings](https://i.imgur.com/PqUX60y.png)


....................................................................................................................


## _IMPORTANT:_

As of 11/6/19, I added a blog to recrootBox. There are some details you need to be aware of if you want to use the blog. 

I used github [gists](https://gist.github.com/) for the "back-end" of blog. gists are just code snippets. I used gists because they are easily accessible via an api call, and everyone with a github account has access to them already. 

To get an idea for how gists are used, check out the gists that I used for my blog [here](https://gist.github.com/trevorhere/68cc754fb298f3121b5b2b4cfaa754d4)

Its pretty simple; a gists can contain many files. For each blog post, i create a file within that gist, write the post and style it using github [markdown](https://developer.github.com/v3/markdown/)

### blog titles 

The only tricky part is the file title name. recrootBox uses these file names for rendering each post. Thus, they need to follow a specific naming construct or the posts won't load. 

This is the construct: `<blog-title><underscore><underscore><month><underscore><day><underscore><year>.md`

For example: `Huzzah!__10_31_19.md`

###### _Dont forget the two underscores in between the post title and the date_

###### _These characters do wonky things to urls: `< > # % { } | \ ^ ~ [ ] `  so don't use them in your file names_

Another important note; The links to the blog posts in recrootBox are generated using the title in the file name, so if you include a title in the file, it's a good idea to make those the same. You can view an example [here](https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4), I use the file title `Huzzah!` and that's also the title in the blog. 

### `profileInformation.js` Settings

```
let blogName = "./log";
let renderBlog = true;
let gistUrl = `https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4`
```

* ` blogName` is just the name of your blog. The name is desplayed in several places throughout the app. 
* `renderBlog` is a boolean that renders the blog if `true` and doesn't if `false`, i.e. if you don't want the blog part of recrootBox, just set this to be `false.`
* `gistUrl` is the url of the gist you want to use for your blog. 




