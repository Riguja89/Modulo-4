const express = require('express');
const characterMiddleware = require('./middlewares/character.js');
const abilityMiddleware = require('./middlewares/ability.js');
const { db, Op, Character, Ability} = require('./db/index');
const { condition } = require('sequelize');



const server = express();

server.use(express.json());

server.use('/character', characterMiddleware);
server.use('/ability', abilityMiddleware);

server.get('/', (req, res) => {
  res.send('Henry Sequelize Homework');
});

server.post('/character',async (req, res) => {
  const { code, name, age, race, hp, mana, date_added } = req.body;
  try {
    const newCharacter = await Character.create({
      code,
      name,
      age,
      race,
      hp,
      mana,
      date_added
    });
    res.status(201).json(newCharacter);
  } catch (error) {
    if(!error.errors){
    res.status(404).send("Error en alguno de los datos provistos");
    }else{
      res.status(404).send("Falta enviar datos obligatorios");
    }
  }
});

server.get('/character', async (req, res) => {

  const {race,name,hp}=req.query;
  //console.log(req.query);
  const condition=race?{where: {race: race}}:{}
  const characters= await Character.findAll(condition,);
  res.send(characters);
});

server.get('/character/:code', async (req, res) => {
  const {code}=req.params;
  //console.log(code);
  const characters= await Character.findByPk(code);
  if(characters){
    res.json(characters)
  }else{res.status(404).send('El código FIFTH no corresponde a un personaje existente')}
  

});

server.post('/ability', async (req, res) => {
  const{name, description, mana_cost}=req.body;
  try {
    const newAbility = await Ability.create({
      name,
      description,
      mana_cost
    });
    res.status(201).json(newAbility);
    
  } catch (error) {
    res.status(404).send('Falta enviar datos obligatorios');
  }
});

module.exports = server;