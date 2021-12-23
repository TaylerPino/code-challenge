const axios = require('axios');
const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const swapiUrl = 'https://swapi.dev/api/';
//Serve web app
app.use(express.static(path.resolve(__dirname, '../client/dist/client')));


app.get("/v1/person/:id", (req, res) => {
    let id = req.params.id;
    let person;
    
    axios.get(swapiUrl + 'people/' + id)
      .then(response => {
        const data = response.data;
        person = {
          name: data.name,
          height: data.height,
          mass: data.mass,
          hair_color: data.hair_color,
          skin_color: data.skin_color,
          gender: data.gender,
          birth_year: data.birth_year,
          home_planet: {
            title: '',
            terrain: '',
            population: ''
          },
          species: [],
          films: []

        }

        let requests = {
          homeworld: data.homeworld,
          species: data.species,
          films: data.films
        };

        axios.get(data.homeworld)
          .then(homeworldResponse =>{
            person.home_planet.title = homeworldResponse.data.name;
            person.home_planet.terrain = homeworldResponse.data.terrain;
            person.home_planet.population = homeworldResponse.data.population;
          })
          .then(()=>{
            axios.all(requests.species.map(l => axios.get(l)))
            .then(axios.spread(function(...res) {
              res.forEach(element => {
                person.species.push({
                  name: element.data.name,
                  average_lifespan: element.data.average_lifespan,
                  classification: element.data.classification,
                  language: element.data.language
                });
              });
            }))
            .then(() =>{
              axios.all(requests.films.map(l => axios.get(l)))
                .then(axios.spread(function(...res) {
                  res.forEach(element => {
                    person.films.push({
                      title: element.data.title,
                      director: element.data.director,
                      producer: element.data.producer,
                      release_date: element.data.release_date
                    });
                  });
                }))
                .then(function () {
                  res.json(person);
                });
            })
          });
      });
});

app.get("/v1/person", (req, res) => {
  let people = [
    {
      id: 1,
      name: 'Luke Skywalker'
    },
    {
      id: 2,
      name: 'C-3PO'
    },
    {
      id: 3,
      name: 'R2-D2'
    },
    {
      id: 4,
      name: 'Darth Vader'
    },
    {
      id: 5,
      name: 'Leia Organa'
    }
  ];

  res.json(people);
 /* axios.get(swapiUrl + 'people')
      .then(response => {
        response.data.results.forEach((element, index) => {
          people.push({
            id: index + 1,
            name: element.name
          });
        });
      })
      .then(()=>{
        res.json(people);
      });*/
});

//Any GET requests that aren't defined will return the web app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/client', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});