// ITERATION 1

// Suspects Array

// mrGreen
// firstName: Jacob
// lastName: Green
// occupation: Entrepreneur
// age: 45
// description: He has a lot of connections
// image: https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
// color: green
const suspectsArray = [
  {
    //------------------ Suspect 1 ----------------

    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },

  {
    //------------------ Suspect 2 ----------------

    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology.Adopted daughter of Mr.Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },
  {
    //------------------ Suspect 3 ----------------

    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },
  {
    //------------------ Suspect 4 ----------------

    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },
  {
    //------------------ Suspect 5 ----------------

    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },
  {
    //------------------ Suspect 6 ----------------

    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  },
];
//console.log("" + suspectsArray[0].firstName);
// Rooms Array

const roomsArray = [
  {
    name: "Dining Room",
  },
  {
    name: "Conservatory",
  },
  {
    name: "Kitchen",
  },
  {
    name: "Study",
  },
  {
    name: "Library",
  },
  {
    name: "Billiard Room",
  },
  {
    name: "Lounge",
  },
  {
    name: "Ballroom",
  },
  {
    name: "Hall",
  },
  {
    name: "Spa",
  },
  {
    name: "Living Room",
  },
  {
    name: "Observatory",
  },
  {
    name: "Theater",
  },
  {
    name: "Guest House",
  },
  {
    name: "Patio",
  },
];
//console.log("" + roomsArray[8].name);
// Weapons Array

const weaponsArray = [
  {
    name: "rope",
    weight: 10,
  },
  {
    name: "knife",
    weight: 8,
  },
  {
    name: "candlestick",
    weight: 2,
  },
  {
    name: "dumbbell",
    weight: 30,
  },
  {
    name: "poison",
    weight: 2,
  },
  {
    name: "axe",
    weight: 15,
  },
  {
    name: "bat",
    weight: 13,
  },
  {
    name: "trophy",
    weight: 25,
  },
  {
    name: "pistol",
    weight: 20,
  },
];
//console.log("" + weaponsArray[3].name + " weight : " + weaponsArray[3].weight);
// ITERATION 2

function selectRandom(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function pickMystery() {
  let mystery = {
    suspect: selectRandom(suspectsArray),

    weapon: selectRandom(weaponsArray),

    room: selectRandom(roomsArray),
  };

  return mystery;
}

// ITERATION 3

function revealMystery(pickMystery) {
  let string =
    pickMystery.suspect.firstName +
    " " +
    pickMystery.suspect.lastName +
    " killed Mr. Boddy using the " +
    pickMystery.weapon.name +
    " in the " +
    pickMystery.room.name +
    "!";

  //   console.log(
  //     "Suspect " +
  //       pickMystery.suspect.firstName +
  //       " " +
  //       pickMystery.suspect.lastName,

  //     " weapon " + pickMystery.weapon.name,
  //     "room " + pickMystery.room.name
  //   );

  console.log(string);
  return string;
}
revealMystery(pickMystery());
