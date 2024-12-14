const teamIds = {
    lakers: ObjectId(),
    celtics: ObjectId(),
    warriors: ObjectId(),
    heat: ObjectId(),
    nuggets: ObjectId()
};


// Insertamos los equipos
const teams = [
  {
      _id: teamIds.lakers,
      name: "Los Angeles Lakers",
      city: "Los Angeles",
      conference: "Western",
      division: "Pacific",
      foundedYear: 1947,
      arena: {
          name: "Crypto.com Arena",
          capacity: 19068
      }
  },
  {
      _id: teamIds.celtics,
      name: "Boston Celtics",
      city: "Boston",
      conference: "Eastern",
      division: "Atlantic",
      foundedYear: 1946,
      arena: {
          name: "TD Garden",
          capacity: 19156
      }
  },
  {
      _id: teamIds.warriors,
      name: "Golden State Warriors",
      city: "San Francisco",
      conference: "Western",
      division: "Pacific",
      foundedYear: 1946,
      arena: {
          name: "Chase Center",
          capacity: 18064
      }
  },
  {
      _id: teamIds.heat,
      name: "Miami Heat",
      city: "Miami",
      conference: "Eastern",
      division: "Southeast",
      foundedYear: 1988,
      arena: {
          name: "Miami-Dade Arena",
          capacity: 19600
      }
  },
  {
      _id: teamIds.nuggets,
      name: "Denver Nuggets",
      city: "Denver",
      conference: "Western",
      division: "Northwest",
      foundedYear: 1967,
      arena: {
          name: "Ball Arena",
          capacity: 19520
      }
  }
];


db.teams.insertMany(teams);