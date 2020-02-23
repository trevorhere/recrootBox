exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // Only update the `/app` page.
    if (page.path.match(/^\/posts/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/posts/*"
  
      // Update the page.
      createPage(page)
    }
  }