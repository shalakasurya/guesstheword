## Clone the repository on your local machine:

git clone https://github.com/shalakasurya/guesstheword.git

## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Project Notes

I Was receiving CORS exception when calling the server to get response:

Access to fetch at 'https://word-guessing-game.onrender.com/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

CORS issue ideally should be handled on the sever side by adding CORS header to allow cross origin requests. In order to proceed with the assignment,
I resolved it myself by using CORS anywhere package deployed on heroku which proxies my request via the URL provided by heroku and adds the cors header.

cors-anywhere Package:
git clone https://github.com/Rob--W/cors-anywhere.git
