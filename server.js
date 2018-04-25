const express = require('express'),
    app = express(),
    Spotify = require('node-spotify-api'),
    spotify = new Spotify({
      id: '96bc7054fa6f4fcfb7fcc1d4641e94b0',
      secret: '8d71e97def8e410499e5cc102f192351'
    }),
    port = process.env.PORT || 5000;

app.get('/api/hey', (req, res) => {
  
  spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
  res.send({ express: 'Hello From asdfsa' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));