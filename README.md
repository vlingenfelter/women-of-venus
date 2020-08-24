# [Women of Venus](https://venus.violetlingenfelter.com)

This project is a collection of biographies of women who have craters named after them on the planet Venus. Each woman's biography contains a hand-drawn picture, a short description of that woman's accomplishments, and a set of tags. Women can be viewed alphabetically, by tag, or at random. 

## Getting Started

1. You will need `npm` installed. You can follow the instructions [here](https://www.npmjs.com/get-npm) to do that. 
1. Clone this repo and run `npm install` to install all the dependencies for the project. 
1. Run `npm run develop` to view the project locally (at localhost:8000) 

### Project Structure

This is a React project that uses Gatsby.js to statically generate the site. There are 3 main folders for the project: content, src, and static. Content contains the website content, src contains the code to generate the website, and static contains fonts and the favicon.

#### `content` folder

The content folder contains the data for the website. There are two folders: assets and blog. 
- `content/assets` contains the favicon and images used in React components
- `content/blog` contains a series of folders. Each folder contains information for the profile page for a single woman. The folders are named by the last name of the woman. Each folder contains exactly two files: `index.md` and an image file (the profile picture).
  - `index.md` is a Markdown file that contains all the relevant information about a woman. The frontmatter of this file includes the title of the page (the woman's full name), "face" or the path to the image associated with that woman, index, description (a short quip about the woman), and a list of tags. 
  - `<last-name>.png` is a hand-drawn portrait of the woman.

#### `src` folder

The `src` folder contains the code that makes the website. There are five folders: components, pages, styles, templates, and utils. 
- `src/components` contains reusable React components 
- `src/pages` contains static pages (like the landing page, the about page, and the 404 page) 
- `src/templates` contains templates for pages that are dynamically generated based on data from the content folder
- `src/styles` contains the global css file for the project
- `src/utils` contains the definition of the styles for `typography.js`

## Data 

Data for this project was taken from [the Venus Crater Database](https://www.lpi.usra.edu/resources/vc/vchome.html) maintained by [URSA's Lunar and Planetary Institute](https://www.lpi.usra.edu/). We use only the subset of craters that were named after historic people. The rest of the craters were named after common, traditionally feminine, first names.

## Dependencies

This project uses [Gatsby.js](https://www.gatsbyjs.org/). 