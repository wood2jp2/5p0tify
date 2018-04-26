const express = require('express'),
    app = express(),
    Spotify = require('node-spotify-api'),
    spotify = new Spotify({
      id: '96bc7054fa6f4fcfb7fcc1d4641e94b0',
      secret: '8d71e97def8e410499e5cc102f192351'
    }),
    finalGenres = [],
    finalGenres2 = [],
    finalGenres3 = [],
    port = process.env.PORT || 5000;

app.get('/api/2018', (req, res) => {
  
  spotify.request('https://api.spotify.com/v1/users/1276640268/playlists/2kpoUUJ5a4Cw3feTkFJhZ2')
      .then( data => {

        let songArray = data.tracks.items

        let artistIdArray = songArray.map(song => song.track.album.artists[0].id);

        for (let i = 0; i < artistIdArray.length; i++) {

            spotify.request(`https://api.spotify.com/v1/artists/${artistIdArray[i]}`)
            .then( resp => {
              finalGenres.push(resp.genres[0])

            })
            .catch(error => {
                console.log('ERROR: ' + error)
            })

        }
      })
      .catch(err => {
        console.log('ERROR: ' + err)
      })
      .then(res.send({ express: finalGenres }))
});

app.get('/api/2008', (req, res) => {
  
  spotify.request('https://api.spotify.com/v1/users/nickguzzo109/playlists/4Qk6DsuSEp34mm8K7MuXH9')
      .then( data => {

        let songArray = data.tracks.items
        let artistIdArray = songArray.map(song => song.track.album.artists[0].id);

        for (let i = 0; i < artistIdArray.length; i++) {

            spotify.request(`https://api.spotify.com/v1/artists/${artistIdArray[i]}`)
            .then( resp => {
              finalGenres2.push(resp.genres[0])
            })
            .catch(error => {
                console.log('ERROR: ' + error)
            })
        }
      })
      .catch(err => {
        console.log('ERROR: ' + err)
      })
      .then(res.send({ express: finalGenres2 }))
});

app.get('/api/1998', (req, res) => {
  
  spotify.request('https://api.spotify.com/v1/users/triple.j.abc/playlists/6T0cEfBWMhKud4swAF4nPP')
  .then( data => {

    let songArray = data.tracks.items

    let artistIdArray = songArray.map(song => song.track.album.artists[0]);
    
    let filteredArray = artistIdArray.filter(artist => artist).map(x => x.id)

    for (let i = 0; i < filteredArray.length; i++) {
        spotify.request(`https://api.spotify.com/v1/artists/${filteredArray[i]}`)
        .then( resp => {
          finalGenres3.push(resp.genres[0])
          console.log(resp)
        })
        .catch(error => {
            console.log('ERROR: ' + error)
        })
    }
  })
  .catch(err => {
    console.log('ERROR: ' + err)
  })
  .then(res.send({ express: finalGenres3 }))
})

app.listen(port, () => console.log(`Listening on port ${port}`));