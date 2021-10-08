//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

// const ejs = require("ejs"); //not required
app.set("view engine", "ejs");

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

app.get("/", function(req, res) {
  res.render("ThunderCloud");
});

app.get("/create_account", function(req, res) {
  res.render("create_account");
});
//
// all = [
//   {
//     movieName: "Loki",
//     imgLink: "https://i.gadgets360cdn.com/large/loki_tom_hiddleston_crop_1622797154582.jpg?downsize=950:*",
//   },{
//   movieName: "Pravaah",
//   imgLink: "https://i.ibb.co/2SLK2Mc/Pravaah-Title-Image.png",
// },
// {
//   movieName: "Spiderman: No way Home",
//   imgLink: "https://i.ytimg.com/vi/EXaqGfbiTxc/maxresdefault.jpg",
// },
// {
//   movieName: "Lethal Weapon",
//   imgLink: "https://images.immediate.co.uk/production/volatile/sites/3/2017/06/lethal-weapon-ea10363.jpg?quality=90&resize=286,185",
// },
// {
//   movieName: "The Mentalist",
//   imgLink: "https://wallpapercave.com/wp/AHUZkUm.jpg",
// },
// {
//   movieName: "Jack Ryan",
//   imgLink: "https://cdn-www.comingsoon.net/assets/uploads/2019/09/jackryanheader.jpg",
// },{
//   movieName: "Scam 1992",
//   imgLink: "https://media.penpenny.com/b3dab0c9-abc0-4a60-b162-72eb2add44a9",
// },
// {
//   movieName: "Family Man",
//   imgLink: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/159216-rgwsswrksx-1621399235.jpeg",
// },
// {
//   movieName: "Mirzapur",
//   imgLink: "https://images.indianexpress.com/2020/10/mirzapur-2-1200-4.jpg",
// },
// {
//   movieName: "Aashram",
//   imgLink: "https://images.indianexpress.com/2020/08/aashram-review-1200.jpg",
// },
// {
//   movieName: "Nobody",
//   imgLink: "http://www.cinestan.be/wp-content/uploads/2021/06/83Hp44xD24OndqfaJbXFQqD25EX.jpg",
// },
// {
//   movieName: "The Batman",
//   imgLink: "https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
// },
// {
//   movieName: "John Wick",
//   imgLink: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6b513e4366ded4f6ef36ca90f11408e06af34f30e1899a5ea44c6253c1d886d4._SX1080_.jpg",
// },
// {
//   movieName: "Taken",
//   imgLink: "https://tvseriesfinale.com/wp-content/uploads/2017/02/taken02.jpg",
// },
// {
//   movieName: "Money Heist",
//   imgLink: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/08/moneyheist5-1627916834.jpg",
// },
// {
//   movieName: "The Office",
//   imgLink: "https://cms.qz.com/wp-content/uploads/2021/01/the-office-peacock-e1610563191354.jpg?quality=75&strip=all&w=1600&h=900&crop=1",
// },
// ];

movies = [{
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

web = [{
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
  }, {
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

tv = [{
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



app.get("/mov", function(req, res) {
  res.render("movies", {
    arr: movies
  });
});

app.get("/web", function(req, res) {
  res.render("movies", {
    arr: web
  });
});

app.get("/tv", function(req, res) {
  res.render("movies", {
    arr: tv
  });
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.post("/", function(req, res) {
  res.render("movies", {
    arr: all
  });

});

app.post("/create", function(req, res) {
  // window.document.querySelector(".log_form").innerHTML("<p>Account created successfully ! </p>");
  setTimeout(function() {
    console.log("account created");
  }, 2000);
  res.sendFile(__dirname + "/public/pricing.html");
});




// backend
mongoose.connect("mongodb://localhost:27017/tcDB", {
  useNewUrlParser: true
});

const contentSchema = {
  movieName: String,
  imgLink: String
};
// collection users
const userSchema = {
  username: String,
  password: String
};



const User = mongoose.model("users", userSchema); //model

// RESTful API
// for users
// get all users
app.get("/users", function(req, res) {
  User.find(function(err, foundUsers) {
    if (!err) {
      // console.log(foundUsers);
      var user_arr = [];
      for (let i = 0; i < foundUsers.length; i++) {
        user_arr.push(foundUsers[i].username);
      }
      res.send(user_arr);
    } else {
      res.send(err);
    }
  });
});

//for content
const Contents = mongoose.model("cts", contentSchema); //model, be careful of plural naming conventions in MongoDB

var all = [];

//get all content
app.get("/contents", function(req, res) {
  Contents.find({}, function(err, foundContent) {
    if (!err) {
      // console.log(foundContent);
      res.send(foundContent);
    } else {
      res.send(err);
    }
  });
});
// for filling all array

// refresh content on website
app.get("/movies", function(req, res) {
  Contents.find(function(err, foundContent) {
    if (!err) {
      var all = [];
      for (let i = 0; i < foundContent.length; i++) {
        var temp = {
          movieName: foundContent[i].movieName,
          imgLink: foundContent[i].imgLink
        };
        all.push(temp);
      }
      res.render("movies", {
        arr: all
      });
    }
  });

});


// adding movie to database
app.post("/contents", function(req, res) {
  // console.log(req.body.movieName);
  // console.log(req.body.imgLink);

  const newContent = new Contents({
    movieName: req.body.movieName,
    imgLink: req.body.imgLink
  });

  newContent.save(function(err) {
    if (!err) {
      console.log("Content added successfully");
      res.send("Content added successfully");
    } else {
      res.send(err);
    }
  });
});

// get specific content

app.get("/contents/:contentName", function(req, res) {
  Contents.findOne({
    movieName: req.params.contentName
  }, function(err, foundCName) {
    if (foundCName) {
      res.send(foundCName);
    } else {
      res.send("Sorry, No content with that particular Name found !");
    }
  });
});

// update a specific article
//put request will entirely replace the document
// use patch req if you do not want to replace entire document
// app.put("/contents/:contentName",function(req,res){
//   Contents.update(
//     // search what to update, updated content, overwrite, callback function
//     {movieName: req.params.contentName},
//     {movieName: req.body.movieName, imgLink: req.body.imgLink},
//     {overwrite: true},
//     function(err){
//       if(!err){
//         res.send("successfully updated content");
//       }
//       else{
//         res.send(err);
//       }
//     }
//   );
// });


//Update Content using patch request
app.patch("/contents/:contentName", function(req, res) {
  Contents.update({
      movieName: req.params.contentName
    }, {
      $set: req.body
    },
    function(err) {
      if (!err) {
        res.send("successfully updated content");
      } else {
        res.send(err);
      }
    }
  );
});

// Delete a specific content

app.delete("/contents/:contentName", function(req, res) {
  Contents.deleteOne(
    {movieName: req.params.contentName},
    function(err){
      if(!err){
        res.send("Deleted the required content successfully.");
      }
      else{
        res.send(err);
      }
    }
  );
}
);
