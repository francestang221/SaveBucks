const fetch = require("node-fetch");

fetch('https://my-coffee-api.herokuapp.com/coffee'), {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }