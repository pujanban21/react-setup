# Website Design Using React
1. Need to install webpack for project initialization
* To install webpack to your project as dev devDependency
```
npm install webpack --save-dev
```
2. Need to npm install babel dependency to support .jsx files for this project
* To install babel in your project folder
```
npm install babel-loader babel-core --save-dev
```
3. Webpack Configuration file
```javascript
devServer:{
  inline:true,
  contentBase: "./dist",
  port:3000
},
module:{
  loaders:[
    {
      test:/\.js$/,
      exclude:/(node_modules)/,
      loader:'babel-loader',
      options:{
        presets:["latest", "react", "stage-0"]
      }
    },
    {
      test:/\.json$/,
      exclude: /(node_modules)/,
      loader:'json-loader'
    },
    {
      test:/\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader'
    },
    {
      test:/\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
    }
  ]
}
```
4. Need to npm install all the loaders defined in the webpack.config.js
5. Project Dependencies
```json
{
  "name": "react-essential",
  "version": "1.0.0",
  "description": "A project focusing on React and related tools",
  "main": "index.js",
  "scripts": {
    "start": "./node_modules/.bin/webpack-dev-server"
  },
  "author": "Pujan Ban",
  "license": "MIT",
  "devDependencies": {
    "autoprefixer-loader": "^3.2.0",
    "babel-cli": "^6.24.1",
    "babel-loader": "^6.4.1",
    "babel-preset-latest": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "css-loader": "^0.28.0",
    "json-loader": "^0.5.4",
    "node-sass": "^4.5.2",
    "sass-loader": "^6.0.3",
    "style-loader": "^0.16.1",
    "webpack": "^2.3.3",
    "webpack-dev-server": "^2.4.2"
  },
  "dependencies": {
    "prop-types": "^15.5.6",
    "react": "^15.5.3",
    "react-dom": "^15.5.3",
    "react-icons": "^2.2.3"
  }
}
```
