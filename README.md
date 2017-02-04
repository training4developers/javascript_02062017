# Welcome to Introduction to ES2015 + ES2016 + ESNEXT

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:

- Today & Tomorrow: 9am to 5pm

Breaks:

- Morning: 10:25am to 10:35am
- Lunch: Noon to 1pm
- Afternoon #1: 2:15pm to 2:25pm
- Afternoon #2: 3:40pm to 3:50pm

## Course Outline

Day 1

- ES2015 Introduction and Project Setup
- Variable Declaration
- Operators (exponent & trailing comma)
- Shorthand Properties (value props, function props & get/set props)
- Template Strings
- Object Functions (assign, entries, values, setPrototypeOf)
- String Functions (startsWith, endsWith)
- Array Functions (filter, reduce, map, find, findIndex)
- Maps, WeakMaps, Sets and WeakSets
- Object & Array Destructuring
- Spread and Rest Operators
- Arrow Functions & Lexical Scope
- Modules

Day 2

- Classes & Prototype Inheritance
- Symbols, For-Of and Iterators
- Generators
- Asynchronous Programming Closures, Promises & Async/Await

## Links

### Instructor's Resources

- [DevelopIntelligence](http://www.developintelligence.com/)
- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [Microsoft Virtual Academy](https://mva.microsoft.com/search/SearchResults.aspx#!q=Eric%20Greene&lang=1033)
- [React Blog Posts](https://github.com/training4developers/react-flux-blog)
- [TopTal Videos](https://www.toptal.com/videos)
- [React SitePoint](http://www.sitepoint.com/author/ericgreene/)

### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)
- [Speaking JavaScript](http://speakingjs.com/es5/)
- [TC39 Process - Feature Stages](http://www.2ality.com/2015/11/tc39-process.html)
- [Official ES2016 Features](http://www.2ality.com/2016/01/ecmascript-2016.html)
- [Possible ES2017 Features](http://www.2ality.com/2016/02/ecmascript-2017.html)
- [ReactiveX Tutorial](http://reactivex.io/learnrx/)

## Setup Instructions

This is a starter project for learning ES2015 + ES2016 + ESNEXT.

### Application Setup

Step 1. Download Install Node.js version 7 or higher. Version 7 or higher MUST be installed. If you have an older Node.js version that you need to keep, then use something like [NVM](https://www.npmjs.com/package/nvm) to manage multiple Node.js installations. To install Node.js click [here](https://nodejs.org).

Step 2. Download this repository. Extract the zip file to a working folder on your system.

Step 3. Open a new terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
npm i
```

It could take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** file per the instructions in that file. Then re-run the command above. Once the packages have been downloaded and installed the setup is complete.

### NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm run babel** - run ES2015 code in the **src** folder through Babel, and produce output in the **dist** folder
- **npm run babel:w** - do the same as the previous command, but also wait for new file changes, and run through Babel automatically

### Useful Resources

- [Babel](https://babeljs.io/)
- [ESLint Configuration](http://eslint.org/docs/user-guide/configuring)

