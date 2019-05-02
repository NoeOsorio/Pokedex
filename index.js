var express = require('express');
var fs = require('fs');
var parse = require('csv-parse');

var app = express();

let port = 3000
var pokemons = [];

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
            id: line[0],
            name: line[1],
            type1: line[2],
            type2: line[3],
            total: line[4],
            hp: line[5],
            attack: line[6],
            defense: line[7],
            spAtt: line[8],
            spDef: line[9],
            speed: line[10],
            generation: line[11],
            legendary: line[12]
        }

        // Save each pokemon in an Array
        pokemons.push(pokemon)
    });
});

// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser);

// This is used for a GET response
app.get('/', function (req, res) {
    res.send("Bienvendidos a Pokedex");
});

app.get('/pokemon', function (req, res) {
    res.send({ name: "Pikachu", type: "Electric" });
});



app.get('/pokemon/:id', function (req, res) {
    var pokemonID = req.params.id
    var sendPokemon
    // return res.status(200).send(pokemons[5]);
    sendPokemon = searchPokemon(pokemons, pokemonID)
    pokemons.forEach(pokemon => {
        if (pokemon.id == pokemonID) {
            return sendPokemon = pokemon
        }
    });
    sendPokemon ? res.send(sendPokemon) : console.log("Pokemon not found")
   

})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
