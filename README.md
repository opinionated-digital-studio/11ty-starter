# Lunetten

Lunetten is an eleventy starter project to quickly bootstrap eleventy projects
using Webpack, Babel and SASS. It is already laid out with a boilerplate to get
started writing
[ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
which promotes maintainable and scalable CSS architecture. By default, it is
dependent on my SASS framework [Letters and
Spaces](https://github.com/opinionated-digital-studio/letters-and-spaces) which
contains defaults, mixins, functions and classes to make beautiful layouts based
on the Modular Typographic Scale.

## Getting started

1. Git clone or fork this repository: `git clone https://github.com/opinionated-digital-studio/lunetten.git`
2. Change your current working directory to the project directory: `cd lunetten` 
3. Install the project's dependencies: `npm install`
4. Spin up a dev server and watch for file changes: `npm run dev`

### Building production files

You can run a production build script with: `npm run build:prod`

The files will be compiled into the /dist directory which you
can serve on a server or other hosting solution.

#### Build notes

- PurgeCSS is engaged after each production build to discard CSS content that is not referenced in the compiled HTML markup
- Media queries are merged during bundling to minimize the number of duplicate declarations

## Technologies used

- [Eleventy](https://www.11ty.dev/) as static website generator
- [Nunjucks](https://mozilla.github.io/nunjucks/) as templating language
- [Webpack](https://webpack.js.org/) as static asset bundler
- [SASS](https://sass-lang.com/) to write CSS
- [Letters and
  Spaces](https://github.com/opinionated-digital-studio/letters-and-spaces) to
  handle typgraphy, spacing and layout

### Acknowledgements

Lots of inspiration was drawn from the [Elf 11ty starter
theme](https://github.com/stowball/elf) as well as [GOV.UK
Frontend](https://github.com/alphagov/govuk-frontend) in architecturing and
authoring the SASS. 

This project was named Lunetten after [the neighbourhood in which it was
made](https://en.wikipedia.org/wiki/Lunetten).

## License

Unless otherwise stated, the codebase is licensed under the [Climate Strike
License](https://climatestrike.software/).
