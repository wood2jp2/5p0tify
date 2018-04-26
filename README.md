The purpose of this small app is to compare and contrast the change of genre preference in top 100 
music over the last 20 years. I have done this by using three different playlists from Spotify using their API: 

    2018: https://open.spotify.com/user/1276640268/playlist/2kpoUUJ5a4Cw3feTkFJhZ2
    2008: https://open.spotify.com/user/nickguzzo109/playlist/4Qk6DsuSEp34mm8K7MuXH9
    1998: https://open.spotify.com/user/triple.j.abc/playlist/6T0cEfBWMhKud4swAF4nPP

Using an NPM package 'node-spotify-api', this made it very easy to scrape the Spotify data at a Node back end route, each year having their own endpoint. I was able to then use that data and visualize using a package for React that utilizes ChartJS called 'react-chartjs-2'. This made it fairly simple to visualize the different genres that America has enjoyed throughout the years using a doughnut chart.

DIRECTIONS: 
    1. Go to your preferred directory, and type 'git clone https://github.com/wood2jp2/5p0tify.git'
    2. Change directory into the app by 'cd 5p0tify'
    3. Make sure to install all packages on the client (front-end) and server (back-end). You can do so
        by typing 'npm install && cd client && npm install && cd ..'
    4. By running the above command, you should have installed all node packages and changed directories
        back to the root (with server.js in it)
    5. You should now be able to run 'yarn dev' which should start both front and back end servers
    6. http://localhost:3000/ should be showing 'Genre-fy', which means you're at the home screen!
    7. Lastly, it's as simple as clicking the 'Calculate Genres of 2018' button! PLEASE NOTE that if the        graph comes up blank, please REFRESH the page, and click the button again. Sometimes, the requests       will hit the API rate limit and will not render data. This can unfortunately happen for all graphs,      but all three WILL often show up if you are persistent. I have yet to come across a fix for this,        though there may well not be one. Sorry for the inconvenience!

FUTURE FIXES AND ADDITIONS: 
    1. Fix the API rate limit hits for a more efficient scraping process...
    2. Delve deeper into styled-components to enrich the aesthetics of the application.
    3. Simplification of code on the server side. There WERE mild differences between the playlist scraping     process at each endpoint, but I could absolutely write a simpler function taking arguments that          consolidates that code.
    4. Deploy my application to a Heroku.