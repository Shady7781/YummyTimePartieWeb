var express =require("express")

var cors =require("cors")
var user=require("./router/UserRouter")
var mongoose = require ('mongoose')
var db = require('./models/db')
var banner=require("./router/BannerRouter")
var table=require("./router/VerfiyTableRouter")
var client = require ("./router/ClientRouter")
var restaurant=require("./router/RestaurantRouter")
var categorie=require("./router/CategorieRouter")
var sousCategorie=require("./router/SousCategorieRouter")
var menjour=require('./router/MenuJourRouter')
var menu=require("./router/MenuRouter")
var offre=require("./router/OffreRouter")
var reclamation=require("./router/ReclamationRouter")
var reservation=require("./router/ReservationTableRouter")
var methodo=require('method-override')
var responsable=require("./router/ResponsableRouter")
var admin=require("./router/AdminRouter")
var bodyParser = require('body-parser')
var role=require('./router/RoleRouter')
const multer = require('multer');
const  upload=multer()
var app=express()
app.use(cors())
app.set("secretKey","tokentest")
// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.static('public'))
app.use("/banners",banner)
app.use("/restaurants",restaurant)
app.use("/menus",menu)
app.use("/users",user)
app.use("/role",role)
app.use("/clients",client)
app.use("/categories",categorie)
app.use("/sousCategories",sousCategorie)
app.use("/tables",table)
app.use("/menusJours",menjour)
app.use("/offres",offre)
app.use("/admin",admin)
app.use("/reclamations",reclamation)
app.use("/reservations",reservation)
app.use("/responsables",responsable)


app.listen(8080,function () {
  console.log(" don't give up be like a monster .server connected")
})