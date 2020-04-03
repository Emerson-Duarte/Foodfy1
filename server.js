const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const cards = require("./data")

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false
})

server.get("/", function(req, res) {
    const courses = {
        title_box: "As melhores receitas",
        description_box: "Aprenda a construir os melhores pratos com receitas criadas por profissionais  do mundo inteiro.",
        title_of_cards: "Mais acessadas"
    }
    return res.render("courses", {items: cards, courses})
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipes", function(req, res){
    return res.render("recipes", {items: cards})
})

server.get("/recipe/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = cards; // Array de receitas carregadas do data.js
    return res.render("recipe", {item: recipe[recipeIndex]});
  });

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, function() {
    console.log("server is running")
})