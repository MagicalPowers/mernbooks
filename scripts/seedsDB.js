const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/comicbookdb"
  );
// https://www.amazon.com/gp/product/B07JJJGYQ4/?ie=UTF8&%2AVersion%2A=1&%2Aentries%2A=0
//amazon banner link https://affiliate-program.amazon.com/home/ads/adcode/search?ac-ms-src=quicklinks&search_term=BATMAN+KINDLE
// reading lists  https://www.comicbookherald.com/reading-dc-comics/
// batman reading list https://www.comicbookherald.com/reading-dc-comics/batman-reading-order/
// good reads 
// GCD indexing??  https://docs.comics.org/wiki/Developer%27s_Guide_to_the_Code
//https://docs.comics.org/wiki/Indexing
// dc comics listing of seriesmanual q
// https://www.dccomics.com/comics?seriesid=232253#browse
//scrape this website, doing more research
// https://www.comics.org/series/76455/details/


const characterSeed = [
  {
    name: "Batman",
    link: "https://dc.fandom.com/wiki/Batman",
    img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/7/7b/Batman_Vol_2_9_Textless_Variant.jpg/revision/latest/scale-to-width-down/150?cb=20120510175322",
    info: "the super-hero protector of Gotham City, a man dressed like a bat who fights against evil and strikes terror into the hearts of criminals everywhere.",
    series: ["new52", "rebirth", "All-Star Batman"]
  },
  {
    name: "Superman",
    link: "https://dc.fandom.com/wiki/Superman",
    img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/9/9d/Superman_0008.jpg/revision/latest/scale-to-width-down/150?cb=20120825192746",
    info: "also known as the Man of Steel, is one of the most powerful superheroes in the DC Universe.",
    series: ["new52", "rebirth"]
  },
  {
    name: "Wonder Woman",
    link: "https://dc.fandom.com/wiki/Wonder_Woman",
        img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/e/ec/Wonder_Woman_0007.jpg/revision/latest/scale-to-width-down/150?cb=20130928221412",
        info: " is an Amazon warrior princess and one of the most powerful superheroes in the DC Universe.",
        series: ["new52", "rebirth"]
      },
      {
          name: "Aquaman",
          link: "https://dc.fandom.com/wiki/Aquaman",
          img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/5/51/Aquaman_0024.jpg/revision/latest?cb=20130516170558",
          info: "also known as Arthur Curry and Orin, is a superhero and the ruler of the seas.",
          series: ["rebirth"]
        },
        {
          name: "Flash",
          link: "https://dc.fandom.com/wiki/Flash",
          img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/6/6e/Flash_0012.jpg/revision/latest/scale-to-width-down/150?cb=20130708162057",
          info: "the fastest man alive. He is the protector of Central City and Keystone City, fighting against evil using his super-speed and a dedicated sense of heroism",
          series: ["new52", "rebirth"]
        },
        {
          name: "Green Lantern",
          link: "https://dc.fandom.com/wiki/Green_Lantern",
          img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/8/83/Hal_Jordan_and_the_Green_Lantern_Corps_Vol_1_45_Textless_Variant.jpg/revision/latest/scale-to-width-down/329?cb=20180523193425",
          info: "a name that has been used by many characters in the DC Universe, and two distinct franchises.",
          series: ["new52", "rebirth"]
        },
        {
          name: "Booster Gold",
          link: "https://dc.fandom.com/wiki/Booster_Gold",
          img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/1/13/Booster_Gold_Futures_End_Vol_1_1_Present_Textless.jpg/revision/latest/scale-to-width-down/329?cb=20140926203505",
          info: "a time-traveling super-hero from the 25th Century who uses high-tech equipment to fight crime, alongside his robotic side-kick Skeets.",
          series: ["new52", "rebirth"]
        },
        {
          name: "Shazam",
          link: "https://dc.fandom.com/wiki/Shazam",
          img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/6/61/Shazam%21_Vol_3_1_Textless_Variant.jpg/revision/latest/scale-to-width-down/329?cb=20181205234924",
          info: "The name originally belonged to an ancient wizard, who lived in the Rock of Eternity and guarded the Seven Deadly Sins.",
          series: ["new52", "rebirth"]
        },
        {
          name: "Teen Titans",
          link: "https://dc.fandom.com/wiki/Teen_Titans",
          img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/6/61/Teen_Titans_Rebirth_Vol_1_1_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20160518052637",
          info: "The Teen Titans are an organization of young vigilantes banded together to fight crime",
          series: ["new52", "rebirth"]
        },
        {
          name: "Green Arrow",
          link: "https://dc.fandom.com/wiki/Green_Arrow",
          img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/2/29/Green_Arrow_Vol_6_1_Textless_Variant.jpg/revision/latest/scale-to-width-down/333?cb=20160617025432",
          info: "Green Arrow is a vigilante superhero who fights crime using archery, technology, and martial arts.",
          series: ["new52", "rebirth"]
        },
        {
          name: "Swamp Thing",
          link: "https://dc.fandom.com/wiki/Swamp_Thing",
          img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/0/0b/Swamp_Thing_Vol_5_25_Textless.jpg/revision/latest/scale-to-width-down/330?cb=20131106222450",
          info: "Swamp Thing is an elemental creature who shares a connection to all plant life on the planet Earth through a network called the Green.",
          series: ["new52", "rebirth"]
        },
        {
          name: "Red Tornado",
          link: "https://dc.fandom.com/wiki/Red_Tornado",
          img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/4/42/Red_Tornado_003.jpg/revision/latest/scale-to-width-down/329?cb=20180306225132",
          info: "Red Tornado is an android super-hero with wind-manipulation powers in addition to incredible strength and speed.",
          series: ["new52", "rebirth"]
        },
  ];
  
const seriesSeed = [
  {
    series: "new52",
    character: "Batman",
    name: "Batman",
    synopsis: "batman fights joker...",
    volumes: ["Vol 1: Court of Owls", "Vol 2: City of Owls", "Vol 3: Death of the Family", "Vol 4: Zero Year - Secret City", "Vol 5: Zero Year - Dark City", "Vol 6: Graveyard Shift", "Vol 7: Endgame", "Vol 8: Superheavy", "Vol 9: Bloom", "Vol 10: Epilogue","DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"],
    extras: ["DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"]
  }, 
  {
    series: "new52",
    character: "Batman",
    name: "Batman: Detective Comics",
    synopsis: "batman fights joker...",
    volumes: ["Vol 1: Faces of Death", "Vol 2: Scare Tactics", "Vol 3: Emperor Penguin", "Vol 4: The Wrath", "Vol 5: Gothtopia", "Vol 6: Icarus", "Vol 7: Anarky", "Vol 8: Blood of Heroes", "Vol 9: Gordon at War", "Vol 10: Epilogue"],
  }, 
  {
    series: "rebirth",
    character: "Batman",
    name: "Batman",
    synopsis: "batman fights joker hahaha...",
    volumes: ["Vol 1: I am Gotham", "Vol 2: I Am Suicide", "Vol 3: I Am Bane", "Vol 4: The War of Jokes and Riddles", "Vol 5: Rules of Engagement", "Vol 6: Bride or Burglar", "Vol 7: The Wedding", "Vol 8: Cold Days", "Vol 9: The Tyrant Wing", "Vol 10: Knightmares", "Vol 11: The Fall and the Fallen"],
  }, 
  {
    series: "rebirth",
    character: "Batman",
    name: "All-Star Batman",
    synopsis: "batman fights joker hahaha... mwaahahha ",
    volumes: ["Vol 1: My Own Worst Enemy", "Vol 2: Ends of the Earth", "Vol 3: The First Ally"],
  }, 
  
  // Wonder Woman
  {
    series: "new52",
    character: "Wonder Woman",
    name: "Wonder Woman",
    synopsis: "yadada",
    volumes: ["Vol 1: Blood","Vol 2: Guts", "Vol 3: Iron", "Vol 4: War", "Vol 5: Flesh", "Vol 6: Bones", "Vol 7: War-Torn", "Vol 8: A Twist of Fate", "Vol 9: Resurrection"]
  },
  {
    series: "rebirth",
    character: "Wonder Woman",
    name: "Wonder Woman",
    synopsis: "yadada",
    volumes: ["Vol 1: The Lies","Vol 2: Year One", "Vol 3: The Truth", "Vol 4: Godwatch", "Vol 5: The Heart of the Amazon", "Vol 6: Children of the Gods", "Vol 7: Amazons Attacked", "Vol 8: The Dark Gods", "Vol 9: The Enemy of Both Sides"]
  },
  // aquaman
  {
    series: "rebirth",
    character: "Aquaman",
    name: "Aquaman",
    synopsis: "yadadawabababa",
    volumes: ["Vol 1: the drowning", "Vol 2: Black Manta Rising", "Vol 3: Crown of Atlantis", "Vol 4: Underworld", "Vol 5: The Crown Comes Down", "Vol 6: Kingslayer","Aquaman/Suicide Squad: Sink Atlantis"],
    extras: ["Aquaman/Suicide Squad: Sink Atlantis"]
  },
  // green lanterns
  {
  series: "rebirth",
  character: "Green lantern",
  name: "Green Lanterns",
  synopsis: "Green lanter nbladibladaaba ",
  volumes: ["Vol 1: Rage Planet", "Vol 2: The Phantom Lantern", "Vol 3: POLARITY", "Vol 4: THE FIRST RING", "Vol 5: OUT OF TIME", "Vol 6: A WORLD OF OUR", "Vol 7: SUPERHUMAN", "Vol 8: GHOSTS OF THE PAST", "Vol 9: EVIL’S MIGHT"],
}, 
// superman

  {
  series: "new52",
  character: "Superman",
  name: "All-Star Superman",
  synopsis: "superman hahahah ",
  volumes: ["Vol 1: SUPERMAN AND THE MEN OF STEEL", "Vol 2: BULLETPROOF", "Vol 3: AT THE END OF DAYS", "Vol 4: HYBRID", "Vol 5: WHAT LIES BENEATH", "Vol 6: SUPERDOOM", "Vol 7: UNDER THE SUN", "Vol 8: TRUTH", "Vol 9: LAST RITES","WORLD AGAINST SUPERMAN"],
  extras: ["WORLD AGAINST SUPERMAN"]
},
]
// copy modal
// {
//   series: "rebirth",
//   character: "batman",
//   name: "Batman All-Star",
//   synopsis: "batman fights joker hahaha... mwaahahha ",
//   volumes: ["Vol 1: ", "Vol 2: ", "Vol 3: ", "Vol 4: ", "Vol 5: ", "Vol 6: ", "Vol 7: ", "Vol 8: ", "Vol 9: ", "Vol 10: ", "Vol 11: "],
// }, 


// const seriesSeed = [
  //   {
    //       series: "new52",
    //       character: "batman",
    //       name: "batman",
    //       synopsis: "batman fights joker...",
    //       volumes: {"vol": "1: Court of Owls", "vol": "2: City of Owls", "vol": "3: Death of the Family", "vol": "4: Zero Year - Secret City", "vol": "5: Zero Year - Dark City", "vol": "6: Graveyard Shift", "vol": "7: Endgame", "vol": "8: Superheavy", "vol": "9: Bloom", "vol": "10: Epilogue"},
    //       extras: ["DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"]
    //   }, 
    //   {
      //       series: "new52",
      //       character: "batman",
//       name: "Batman: Detective Comics",
//       synopsis: "batman fights joker...",
//       volumes: {"vol": "1: Faces of Death", "vol": "2: Scare Tactics", "vol": "3: Emperor Penguin", "vol": "4: The Wrath", "vol": "5: Gothtopia", "vol": "6: Icarus", "vol": "7: Anarky", "vol": "8: Blood of Heroes", "vol": "9: Gordon at War", "vol": "10: Epilogue"},
//   }, 

// ]

const volumeSeed = [
  {

  }
]

const notesSeed = [
    {
        name: "DC Comics: Zero Year",
        message: "Read after vol 4: Zero Year- Secret City "
    },
    {
        name: "The Joker: Endgame",
        message: "Read after Vol 7: Endgame"
    },
    {
        name: "Batman vs. Superman: The Greatest Battles",
        message: "Read after entire series"
    }
];

db.Character
  .remove({})
  .then(() => db.Character.collection.insertMany(characterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Series
  .remove({})
  .then(() => db.Series.collection.insertMany(seriesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Notes
  .remove({})
  .then(() => db.Notes.collection.insertMany(notesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });