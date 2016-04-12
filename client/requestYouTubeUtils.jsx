import youTubeKey from './apiKeys.jsx';
var $ = require("jquery");

// Returns media link and static content (thumbnails, artist, title):

var searchYouTube = ({query}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: youTubeKey,
    q: query,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done((result) => {
    if (callback) {
      // run callback on array of songs
      callback(result.items);
    }
    return result.items;
   }
  )
  .fail((err) => {
    console.log(err);
  });
};


export default searchYouTube;


