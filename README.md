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
