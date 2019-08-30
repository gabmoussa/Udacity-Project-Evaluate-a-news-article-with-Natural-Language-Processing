# Udacity Project Evaluate a news article with Natural Language Processing
Using an exciting new api called `Aylien`, we can build a simple web interface to interact with their NLP system. 
This tool will give us back pertinent information about the article, 
like whether the content is subjective (opinion) 
or objective (fact-based) and whether it is positive, neutral, or negative in tone.


This project I build a web tool that allows users to run 
Natural Language Processing (NLP) on articles or
blogs found on other websites.

## Important Notice

The credentials used in setting up the aylien api is supposed to last just for 14 days from the day I created a trial account on Aylien text api.
so if it doesn't work it means my credentials must have surely expired
. So please use the link `https://aylien.com/text-api/` to create an account on Aylien text api and change my credentials in the `application.js` file in the `./server` folder.

## Running the Code
Use the link provided to navigate to the git repo and clone it.
    
   This will install all the dependencies and development tools required by the project in the target file . They are all 
    present in the `pakage.json` file.
### Running in production Mode  
From the route directory in the terminal, run the `npm run build-prod` 
command this will generate the dist folder and cache folders too in a folder `./dist`.
- from the same directory, run `npm run start`
- The site will be accessible from `localhost:4000` from your browser tab.
- From the site you will be able to input yoururl to be analyzed by aylien.

### Running in development Mode
Then run the `npm run build-dev` command still from your terminal, this will lauch your default browser with 
the html file from the views folder.
- The site will be accessible from `localhost:8081` from your browser tab.
- from the same directory, run `npm run start`
  
- From the site you will be able to input your url to be analyzed by aylien.

## How to test with jest

In this project the framework that was  used to test is `jest`.
To run test, move to the root directory from your terminal run the command `npm run test`.

Below is a screenshot of the test results
![tests](jest_test.png)

All the files in the `./src/js` file was tested. Below is a screenshot of the results after running the test command.

## Interaction
When you run the project, this is a view of how the website actually looks like
![view](screen.png)
