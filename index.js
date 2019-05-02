var express = require('express');
var fs = require('fs');
var parse = require('csv-parse');

var app = express();

let port = 3000

var inputFile = 'pokemon.csv';
console.log("Processing Pokemon file");
console.log(inputFile)

var parser = parse({ delimiter: ',' }, function (err, data) {
    //Line is the variable of each pokemon
    //Choose what you want from the info at each pokemon
    //You dont have to use anything of "Line" if you don´t need it

    data.forEach(function (line) {
        // Crate each field you want to use for each pokemon
        // Example:
        // {
        //     id: line[0],
        //     name: line[1],
        //     generation: line[11]
        // }

        var pokemon = 
        {
            //Create your own version of a pokemon
        }

    });
});

// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser);

// This is used for a GET response
app.get('/pokemon', function (req, res) {
    res.send({ name: "Pikachu", type: "Electric" });
});

app.get('/', function (req, res) {
    res.send("Bienvenidos a Pokedex");
})


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
