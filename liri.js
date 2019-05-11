require('dotenv').config()
let keys = require('./keys.js')
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios')
let moment = require('moment')
let searchType = process.argv[2]
let search = process.argv[3]


if(searchType === `spotify-this-song`){
  fireSpotify()
}else if (searchType === `concert-this`){
  fireConcert()
}

function fireSpotify(){
  const query = search
  spotify.search({ type: 'track', query: search }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });

}


function fireConcert(){
  const artist = search
  const url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
  axios.get(url)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

}

   
  


// // let url2 = 'http://www.artists.bandsintown.com/bandsintown-api'
// let url;


// searchKey = function(){
// if(searchType === 'movie'){

// url = 'http://www.omdbapi.com/?t=' + search + '&apikey=8278d72d';
// console.log(url)
// }
// }
  



  

// module.exports = searchKey