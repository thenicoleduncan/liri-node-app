require('dotenv').config()
const keys = require('./keys.js')
const axios = require('axios')
const moment = require('moment')
const Spotify = require('node-spotify-api')
let omdbID = keys.omdb
let bandsInTown = keys.BandsInTown
const spotify = new Spotify(keys.spotify)
const fs = require('fs')

var command = process.argv[2]

var userInput = ""
for (let i = 3; i < process.argv.length; i++) {
    userInput += process.argv[i] + " "
};

// function spotify.search
function spotifyAxios(){

    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        console.log(data); 
    });
};

// function concert search
function bandsAxios() {

    axios.get(`https://rest.bandsintown.com/artists/${userInput}/events?app_id=${bandsInTown}`)
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
};

// function movie search
function omdbAxios() {

    axios.get(`http://www.omdbapi.com/?t=${userInput}&y=&plot=short&apikey=${omdbID}`)
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
};



//loop through the data to be abe to read it properly