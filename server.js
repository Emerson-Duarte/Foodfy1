const express = require('express');
const nunjucks = require('nunjucks');


const server = express();
const cards = require("./data")

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res) {
    return res.render("courses", {items: cards})
})

server.get("/about", function(req, res) {
    return res.render("about")
})

// server.get("/receitas", function(req, res) {
//     return res.render("receitas")
// })

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, function() {
    console.log("server is running")
})