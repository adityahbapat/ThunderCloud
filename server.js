//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
app.use(bodyParser.urlencoded({extended : true}));

// const ejs = require("ejs"); //not required
app.set("view engine","ejs");

app.use(express.static('public'));
// backend
// mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true});

// const userSchema = new mongoose.schema({
//   name: username,
//
// });




app.get("/", function(req,res){
  res.render("ThunderCloud");
});

app.get("/create_account", function(req,res){
  res.render("create_account");
});

all = [
  {
    movieName: "Loki",
    imgLink: "https://i.gadgets360cdn.com/large/loki_tom_hiddleston_crop_1622797154582.jpg?downsize=950:*",
  },{
  movieName: "Pravaah",
  imgLink: "https://i.ibb.co/2SLK2Mc/Pravaah-Title-Image.png",
},
{
  movieName: "Spiderman: No way Home",
  imgLink: "https://i.ytimg.com/vi/EXaqGfbiTxc/maxresdefault.jpg",
},
{
  movieName: "Lethal Weapon",
  imgLink: "https://images.immediate.co.uk/production/volatile/sites/3/2017/06/lethal-weapon-ea10363.jpg?quality=90&resize=286,185",
},
{
  movieName: "The Mentalist",
  imgLink: "https://wallpapercave.com/wp/AHUZkUm.jpg",
},
{
  movieName: "Jack Ryan",
  imgLink: "https://cdn-www.comingsoon.net/assets/uploads/2019/09/jackryanheader.jpg",
},{
  movieName: "Scam 1992",
  imgLink: "https://media.penpenny.com/b3dab0c9-abc0-4a60-b162-72eb2add44a9",
},
{
  movieName: "Family Man",
  imgLink: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/159216-rgwsswrksx-1621399235.jpeg",
},
{
  movieName: "Mirzapur",
  imgLink: "https://images.indianexpress.com/2020/10/mirzapur-2-1200-4.jpg",
},
{
  movieName: "Aashram",
  imgLink: "https://images.indianexpress.com/2020/08/aashram-review-1200.jpg",
},
{
  movieName: "Nobody",
  imgLink: "http://www.cinestan.be/wp-content/uploads/2021/06/83Hp44xD24OndqfaJbXFQqD25EX.jpg",
},
{
  movieName: "The Batman",
  imgLink: "https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
},
{
  movieName: "John Wick",
  imgLink: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6b513e4366ded4f6ef36ca90f11408e06af34f30e1899a5ea44c6253c1d886d4._SX1080_.jpg",
},
{
  movieName: "Taken",
  imgLink: "https://tvseriesfinale.com/wp-content/uploads/2017/02/taken02.jpg",
},
{
  movieName: "Money Heist",
  imgLink: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/08/moneyheist5-1627916834.jpg",
},
{
  movieName: "The Office",
  imgLink: "https://cms.qz.com/wp-content/uploads/2021/01/the-office-peacock-e1610563191354.jpg?quality=75&strip=all&w=1600&h=900&crop=1",
},
];

movies = [
  {
    movieName: "Spiderman: No way Home",
    imgLink: "https://i.ytimg.com/vi/EXaqGfbiTxc/maxresdefault.jpg",
  },
  {
    movieName: "Nobody",
    imgLink: "http://www.cinestan.be/wp-content/uploads/2021/06/83Hp44xD24OndqfaJbXFQqD25EX.jpg",
  },
  {
    movieName: "The Batman",
    imgLink: "https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  },
  {
    movieName: "John Wick",
    imgLink: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6b513e4366ded4f6ef36ca90f11408e06af34f30e1899a5ea44c6253c1d886d4._SX1080_.jpg",
  }
];

web = [
  {
    movieName: "Loki",
    imgLink: "https://i.gadgets360cdn.com/large/loki_tom_hiddleston_crop_1622797154582.jpg?downsize=950:*",
  },
  {
    movieName: "Pravaah",
    imgLink: "https://i.ibb.co/2SLK2Mc/Pravaah-Title-Image.png",
  },
  {
    movieName: "Money Heist",
    imgLink: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/08/moneyheist5-1627916834.jpg",
  },
    {
    movieName: "Jack Ryan",
    imgLink: "https://cdn-www.comingsoon.net/assets/uploads/2019/09/jackryanheader.jpg",
  },{
    movieName: "Scam 1992",
    imgLink: "https://media.penpenny.com/b3dab0c9-abc0-4a60-b162-72eb2add44a9",
  },
  {
    movieName: "Family Man",
    imgLink: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/159216-rgwsswrksx-1621399235.jpeg",
  },
  {
    movieName: "Mirzapur",
    imgLink: "https://images.indianexpress.com/2020/10/mirzapur-2-1200-4.jpg",
  },
  {
    movieName: "Aashram",
    imgLink: "https://images.indianexpress.com/2020/08/aashram-review-1200.jpg",
  },
];

tv = [
  {
    movieName: "Lethal Weapon",
    imgLink: "https://images.immediate.co.uk/production/volatile/sites/3/2017/06/lethal-weapon-ea10363.jpg?quality=90&resize=286,185",
  },
  {
    movieName: "The Mentalist",
    imgLink: "https://wallpapercave.com/wp/AHUZkUm.jpg",
  },
  {
    movieName: "The Office",
    imgLink: "https://cms.qz.com/wp-content/uploads/2021/01/the-office-peacock-e1610563191354.jpg?quality=75&strip=all&w=1600&h=900&crop=1",
  },
  {
    movieName: "Taken",
    imgLink: "https://tvseriesfinale.com/wp-content/uploads/2017/02/taken02.jpg",
  },
];

app.get("/movies", function(req,res){
  res.render("movies",{arr:all});
});

app.get("/mov", function(req,res){
  res.render("movies",{arr:movies});
});

app.get("/web", function(req,res){
  res.render("movies",{arr:web});
});

app.get("/tv", function(req,res){
  res.render("movies",{arr:tv});
});

app.get("/contact", function(req,res){
  res.render("contact");
});

app.post("/",function(req,res){
  res.render("movies",{arr: all});

});

app.post("/create",function(req,res){
  // window.document.querySelector(".log_form").innerHTML("<p>Account created successfully ! </p>");
  setTimeout(function(){ console.log("account created");},2000);
  res.sendFile(__dirname + "/public/pricing.html");
});



function vpn_alert(){
  alert("Please disable your VPN while payment!");
}

app.listen(3000, function(){
console.log("Server started on port 3000" );
});

// pages_visited = [];
// pages_visited.push(window.location.href);
//
// console.log("Pages visited by user till now:");
// for(let i = 0; i < pages_visited.length; i++){
//   console.log(pages_visited[i]);
// }
