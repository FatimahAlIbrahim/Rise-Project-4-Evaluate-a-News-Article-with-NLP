# Rise Front End Developer Nanodegree Project 4: Evaluate a News Article with Natural Language Processing
This website was created to satisfy the requirements of the fourth project in Udacity's Front End Developer Nanodegree.

## Project Description
The website allows the user to enter a news article URL to be evaluated using Natural Language Processing using the [Sentiment Analysis API](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis) 
## Installation
1. Fork and Clone, or Download the project.
1. Run below command in terminal to install the packages
```javascript 
npm install
``` 
1. Create an account with [Meaning Cloud](https://www.meaningcloud.com/) to get the Sentiment Analysis API Key.
1. Add your API key in server/index.js
1. Run either of below commands to generate the build files
```javascript
npm run build-dev
// or 
npm run buil-prod
```
1. Run below command to start the server in localhost
```javascript
npm start
``` 

## Dependencies
```javascript
"dependencies": {
    "body-parser": "^1.20.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1"
  },
  "devDependencies": {
    "@babel/core": "^7.20.5",
    "@babel/preset-env": "^7.20.2",
    "babel-loader": "^9.1.0",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.7.3",
    "css-minimizer-webpack-plugin": "^4.2.2",
    "html-webpack-plugin": "^5.5.0",
    "jest": "^29.3.1",
    "mini-css-extract-plugin": "^2.7.2",
    "node-sass": "^8.0.0",
    "sass-loader": "^13.2.0",
    "style-loader": "^3.3.1",
    "terser-webpack-plugin": "^5.3.6",
    "webpack-dev-server": "^4.11.1",
    "workbox-webpack-plugin": "^6.5.4"
  }
```