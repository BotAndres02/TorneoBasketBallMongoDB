// Insertamos los árbitros
const referees = [
  {
      _id: refereeIds.ref1,
      firstName: "James",
      lastName: "Williams",
      dateOfBirth: new Date("1980-03-15"),
      experience: 15,
      certification: {
          level: "SENIOR",
          issuedDate: new Date("2008-03-01"),
          expirationDate: new Date("2025-03-01")
      },
      status: "ACTIVE"
  },
  {
      _id: refereeIds.ref2,
      firstName: "Sarah",
      lastName: "Martinez",
      dateOfBirth: new Date("1985-07-22"),
      experience: 10,
      certification: {
          level: "SENIOR",
          issuedDate: new Date("2013-03-01"),
          expirationDate: new Date("2025-03-01")
      },
      status: "ACTIVE"
  },
  {
      _id: refereeIds.ref3,
      firstName: "Michael",
      lastName: "Johnson",
      dateOfBirth: new Date("1978-11-30"),
      experience: 20,
      certification: {
          level: "SENIOR",
          issuedDate: new Date("2003-03-01"),
          expirationDate: new Date("2025-03-01")
      },
      status: "ACTIVE"
  }
];

db.referees.insertMany(referees);
