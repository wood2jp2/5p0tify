const express = require('express'),
    app = express(),
    Spotify = require('node-spotify-api'),
    spotify = new Spotify({
      id: '96bc7054fa6f4fcfb7fcc1d4641e94b0',
      secret: '8d71e97def8e410499e5cc102f192351'
    }),
    port = process.env.PORT || 5000;

app.get('/api/hey', (req, res) => {

  spotify.request('https://api.spotify.com/v1/users/1276640268/playlists/2kpoUUJ5a4Cw3feTkFJhZ2')
      .then( data => {
        let artistId = data.tracks.items[32].track.album.artists[0].id
          spotify.request(`https://api.spotify.com/v1/artists/${artistId}`)
            .then( res => {
            console.log(res.genres[0])
              })
            .catch(error => {
            console.log('ERROR: ' + error)
              })

      })
      .catch(err => {
        console.log('ERROR: ' + err)
      })

  // spotify.request('https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr')
  //     .then( data => {
  //       console.log(data)
  //     })
  //     .catch(err => {
  //       console.log('ERROR: ' + err)
  //     })
   

  res.send({ express: 'Hello From kokoko' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));