const results = [
  {
    gameId: ObjectId("64eaf20e8f1b2f001c9f5678"),
    season: "2023-24",
    date: new Date("2023-12-25T20:00:00Z"),
    teams: {
      home: {
        teamId: ObjectId("64eaf20e8f1b2f001c9f1234"),
        name: "Los Angeles Lakers",
        score: 115,
      },
      away: {
        teamId: ObjectId("64eaf20e8f1b2f001c9f1235"),
        name: "Boston Celtics",
        score: 108,
      },
    },
    referees: [
      {
        refereeId: ObjectId("64eaf20e8f1b2f001c9f3456"),
        name: "James Williams",
        role: "HEAD",
      },
    ],
    highlights: [
      {
        playerId: ObjectId("64eaf20e8f1b2f001c9f6789"),
        name: "LeBron James",
        points: 30,
        assists: 8,
      },
      {
        playerId: ObjectId("64eaf20e8f1b2f001c9f6790"),
        name: "Jayson Tatum",
        points: 28,
        rebounds: 10,
      },
    ],
    status: "COMPLETED",
  },
  {
    gameId: ObjectId("64eaf20e8f1b2f001c9f5679"),
    season: "2023-24",
    date: new Date("2023-12-27T20:00:00Z"),
    teams: {
      home: {
        teamId: ObjectId("64eaf20e8f1b2f001c9f1236"),
        name: "Golden State Warriors",
        score: 120,
      },
      away: {
        teamId: ObjectId("64eaf20e8f1b2f001c9f1237"),
        name: "Miami Heat",
        score: 112,
      },
    },
    referees: [
      {
        refereeId: ObjectId("64eaf20e8f1b2f001c9f3457"),
        name: "Sarah Martinez",
        role: "HEAD",
      },
    ],
    highlights: [
      {
        playerId: ObjectId("64eaf20e8f1b2f001c9f6791"),
        name: "Stephen Curry",
        points: 40,
        assists: 10,
      },
      {
        playerId: ObjectId("64eaf20e8f1b2f001c9f6792"),
        name: "Jimmy Butler",
        points: 25,
        rebounds: 8,
      },
    ],
    status: "COMPLETED",
  },
];
db.results.insertMany(results);