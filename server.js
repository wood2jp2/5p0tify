const express = require('express'),
    app = express(),
    Spotify = require('node-spotify-api'),
    spotify = new Spotify({
      id: '96bc7054fa6f4fcfb7fcc1d4641e94b0',
      secret: '8d71e97def8e410499e5cc102f192351'
    }),
    hey = {
      something: 'fdsasdf',
      finalGenres: []
    },
    port = process.env.PORT || 5000;

app.get('/api/hey', (req, res) => {
  
  spotify.request('https://api.spotify.com/v1/users/1276640268/playlists/2kpoUUJ5a4Cw3feTkFJhZ2')
      .then( data => {

        let songArray = data.tracks.items

        let artistIdArray = songArray.map(song => song.track.album.artists[0].id);

        for (let i = 0; i < artistIdArray.length; i++) {

            spotify.request(`https://api.spotify.com/v1/artists/${artistIdArray[i]}`)
            .then( resp => {
              hey.finalGenres.push(resp.genres[0])
              
            })
            .catch(error => {
                console.log('ERROR: ' + error)
            })

           
        }
      })
      .catch(err => {
        console.log('ERROR: ' + err)
      })
      .then(res.send({ express: hey.finalGenres }))
});

app.listen(port, () => console.log(`Listening on port ${port}`));