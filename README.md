## Setup
Install dependencies
```sh
$ npm install
```

# Plugins
- Babel - Transpiles latest Javascript.
- HTML Webpack - Creates a index.html entry point.
- Clean Webpack - Cleans the public/ folder when running the build command.
- Webpack Dev Server - Launch a local server on port 3000 for development.
- Mini Css Extract - Extract all CSS code to a seperate file on build.
- Optimize Css Assets - Minify CSS on build.

## Development
Runs the local webpack-dev-server on [http://localhost:3000/](http://localhost:3000/)
```sh
$ npm run dev
```
## Deployment
Builds the app
```sh
$ npm run build
```