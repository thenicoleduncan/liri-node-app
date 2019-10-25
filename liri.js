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

var input = ""
   for (let i = 3; i < process.argv.length; i++) {
       input += process.argv[i] + " "

// function spotify.search

// function concert search
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

// function movie search
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



//loop through the data to be abe to read it properly 
// for (let i = 3; i < process.argv.length; i++) {
    // input += process.argv[i] + " "