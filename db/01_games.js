// Insertamos los juegos
const refereeIds = {
    ref1: ObjectId(),
    ref2: ObjectId(),
    ref3: ObjectId(),
}; 

const seasonIds = {
    season2223: ObjectId(),
    season2324: ObjectId()
};

const teamIds = {
    lakers: ObjectId(),
    celtics: ObjectId(),
    warriors: ObjectId(),
    heat: ObjectId(),
    nuggets: ObjectId()
};

const games = [
  {
      _id: ObjectId(),
      seasonId: seasonIds.season2324,
      gameType: "REGULAR_SEASON",
      homeTeam: {
          teamId: teamIds.lakers,
          score: 115
      },
      awayTeam: {
          teamId: teamIds.celtics,
          score: 108
      },
      date: new Date("2023-12-25T20:00:00Z"),
      officials: [
          { refereeId: refereeIds.ref1, role: "HEAD" }
      ],
      status: "COMPLETED"
  },
  {
      _id: ObjectId(),
      seasonId: seasonIds.season2324,
      gameType: "REGULAR_SEASON",
      homeTeam: {
          teamId: teamIds.warriors,
          score: 120
      },
      awayTeam: {
          teamId: teamIds.heat,
          score: 112
      },
      date: new Date("2023-12-27T20:00:00Z"),
      officials: [
          { refereeId: refereeIds.ref2, role: "HEAD" }
      ],
      status: "COMPLETED"
  },
  {
      _id: ObjectId(),
      seasonId: seasonIds.season2324,
      gameType: "REGULAR_SEASON",
      homeTeam: {
          teamId: teamIds.nuggets,
          score: 125
      },
      awayTeam: {
          teamId: teamIds.lakers,
          score: 119
      },
      date: new Date("2024-01-05T20:00:00Z"),
      officials: [
          { refereeId: refereeIds.ref3, role: "HEAD" }
      ],
      status: "COMPLETED"
  }
];

db.games.insertMany(games);