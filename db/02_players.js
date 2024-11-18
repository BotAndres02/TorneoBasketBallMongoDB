// Insertamos los jugadores
const players = [
  // Lakers
  {
      _id: ObjectId(),
      firstName: "LeBron",
      lastName: "James",
      dateOfBirth: new Date("1984-12-30"),
      nationality: "USA",
      currentTeam: { teamId: teamIds.lakers },
      status: "ACTIVE",
      position: "SF"
  },
  {
      _id: ObjectId(),
      firstName: "Anthony",
      lastName: "Davis",
      dateOfBirth: new Date("1993-03-11"),
      nationality: "USA",
      currentTeam: { teamId: teamIds.lakers },
      status: "ACTIVE",
      position: "PF"
  },
  // Celtics
  {
      _id: ObjectId(),
      firstName: "Jayson",
      lastName: "Tatum",
      dateOfBirth: new Date("1998-03-03"),
      nationality: "USA",
      currentTeam: { teamId: teamIds.celtics },
      status: "ACTIVE",
      position: "SF"
  },
  {
      _id: ObjectId(),
      firstName: "Jaylen",
      lastName: "Brown",
      dateOfBirth: new Date("1996-10-24"),
      nationality: "USA",
      currentTeam: { teamId: teamIds.celtics },
      status: "ACTIVE",
      position: "SG"
  },
  // Warriors
  {
      _id: ObjectId(),
      firstName: "Stephen",
      lastName: "Curry",
      dateOfBirth: new Date("1988-03-14"),
      nationality: "USA",
      currentTeam: { teamId: teamIds.warriors },
      status: "ACTIVE",
      position: "PG"
  },
  {
      _id: ObjectId(),
      firstName: "Klay",
      lastName: "Thompson",
      dateOfBirth: new Date("1990-02-08"),
      nationality: "USA",
      currentTeam: { teamId: teamIds.warriors },
      status: "ACTIVE",
      position: "SG"
  },
  // Heat
  {
      _id: ObjectId(),
      firstName: "Jimmy",
      lastName: "Butler",
      dateOfBirth: new Date("1989-09-14"),
      nationality: "USA",
      currentTeam: { teamId: teamIds.heat },
      status: "ACTIVE",
      position: "SF"
  },
  {
      _id: ObjectId(),
      firstName: "Bam",
      lastName: "Adebayo",
      dateOfBirth: new Date("1997-07-18"),
      nationality: "USA",
      currentTeam: { teamId: teamIds.heat },
      status: "ACTIVE",
      position: "C"
  },
  // Nuggets
  {
      _id: ObjectId(),
      firstName: "Nikola",
      lastName: "Jokic",
      dateOfBirth: new Date("1995-02-19"),
      nationality: "Serbia",
      currentTeam: { teamId: teamIds.nuggets },
      status: "ACTIVE",
      position: "C"
  },
  {
      _id: ObjectId(),
      firstName: "Jamal",
      lastName: "Murray",
      dateOfBirth: new Date("1997-02-23"),
      nationality: "Canada",
      currentTeam: { teamId: teamIds.nuggets },
      status: "ACTIVE",
      position: "PG"
  }
];

db.players.insertMany(players);