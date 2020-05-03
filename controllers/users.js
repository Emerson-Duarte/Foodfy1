const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res) {
    const courses = {
        title_box: "As melhores receitas",
        description_box: "Aprenda a construir os melhores pratos com receitas criadas por profissionais  do mundo inteiro.",
        title_of_cards: "Mais acessadas"
    }
    return res.render("courses", {recipes: data.recipes, courses})
}

exports.about = function(req, res) {
    return res.render("about")
}

exports.recipes = function(req, res){
    return res.render("recipes", {recipes: data.recipes})
}

exports.recipe = function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = data.recipes; // Array de receitas carregadas do data.js
    return res.render("recipe", {recipes: recipe[recipeIndex]});
  }